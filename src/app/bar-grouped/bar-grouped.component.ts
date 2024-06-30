import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule
} from "ng-apexcharts";
import { ScrappingService } from "../scrapping.service";
import { forkJoin } from "rxjs";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-bar-grouped',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-grouped.component.html',
  styleUrls: ['./bar-grouped.component.scss'] // corrected the key to styleUrls
})
export class BarGroupedComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor(private service: ScrappingService) {
    forkJoin({
      atalaryaPos: this.service.countSourceAtalaryaAndPositiveClass(),
      atalaryaNeg: this.service.countSourceAtalaryaAndNegativeClass(),
      africaPos: this.service.countSourceAfricaAndPositiveClass(),
      africaNeg: this.service.countSourceAfricaAndNegativeClass()
    }).subscribe({
      next: (results) => {
        const atalaryaPos = results.atalaryaPos.count;
        const atalaryaNeg = results.atalaryaNeg.count;
        const africaPos = results.africaPos.count;
        const africaNeg = results.africaNeg.count;
        console.log("+++++++++++++++++++ "+atalaryaPos)

        this.chartOptions = {
          series: [
            {
              name: "Positifs",
              data: [africaPos, atalaryaPos]
            },
            {
              name: "Négatifs",
              data: [africaNeg, atalaryaNeg]
            }
          ],
          chart: {
            type: "bar",
            height: 500
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%"
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
          },
          xaxis: {
            categories: ["Africa", "Atalayar"]
          },
          yaxis: {
            title: {
              text: "Count"
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return val + " articles";
              }
            }
          }
        };
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
