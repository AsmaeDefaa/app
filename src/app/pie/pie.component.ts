import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from "ng-apexcharts";
import { ScrappingService } from "../scrapping.service";
import { forkJoin } from "rxjs";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss'
})
export class PieComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  positif: any;
  negatif: any;
  neutre: any;

  constructor(private service: ScrappingService) {}

  ngOnInit(): void {
    forkJoin({
      neutre: this.service.getNombreArticleNeutre(),
      negatif: this.service.getNombreArticleNegatif(),
      positif: this.service.getNombreArticlePositif()
    }).subscribe({
      next: (results) => {
        this.neutre = results.neutre.count;
        this.negatif = results.negatif.count;
        this.positif = results.positif.count;

        console.log(this.neutre, this.negatif, this.positif);

        this.chartOptions = {
          series: [this.positif, this.negatif, this.neutre],
          chart: {
            width: 450,
            type: "donut"
          },
          labels: ["articles positif", "articles négatif", "articles neutre"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ]
        };
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
