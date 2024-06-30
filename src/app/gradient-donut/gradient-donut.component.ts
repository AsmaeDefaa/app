import { Component, ViewChild } from "@angular/core";
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
  selector: 'app-gradient-donut',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './gradient-donut.component.html',
  styleUrls: ['./gradient-donut.component.scss'] // corrected the key to styleUrls
})
export class GradientDonutComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  africa: any;
  talayra: any;

  constructor(private service: ScrappingService) {
    forkJoin({
      africa: this.service.getNombreArticleAfrica(),
      talayra: this.service.getNombreArticleTalarya()
    }).subscribe({
      next: (results) => {
        this.africa = results.africa.count;
        this.talayra = results.talayra.count;

        this.chartOptions = {
          series: [this.africa, this.talayra],
          chart: {
            width: 450,
            type: "pie",
             
          },
          
          labels: ["Africa", "Atalayar"],
        
          responsive: [
            {
            
              breakpoint: 480,
            
              options: {
                chart: {
                  width: 200,
                  
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
