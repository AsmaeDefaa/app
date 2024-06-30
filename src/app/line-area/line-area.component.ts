import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-line-area',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './line-area.component.html',
  styleUrl: './line-area.component.scss'
})
export class LineAreaComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Indice de Sentiment",
          type: "area",
          data: [0.355,
            0.382,
            0.427,
            0.437,
            0.131,
            0.292,
            0.447,
             0.383,
            ]
        },
        {
          name: "Tourisme",
          type: "line",
          data: [5864917, 6679101, 7043006, 1407994, 1284335, 5064780, 7149994]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        curve: "smooth"
      },
      fill: {
        type: "solid",
        opacity: [0.35, 1]
      },
      labels: [
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",

      ],
      markers: {
        size: 0
      },
      yaxis: [
        {
          title: {
            text: "Series A"
          }
        },
        {
          opposite: true,
          title: {
            text: "Series B"
          }
        }
      ],
      xaxis: {
        labels: {
          trim: false
        }
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    };
  }

  public generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
}






