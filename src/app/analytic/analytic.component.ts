import { Component } from '@angular/core';
import { GradientDonutComponent } from "../gradient-donut/gradient-donut.component";
import { PieComponent } from "../pie/pie.component";
import { BarGroupedComponent } from "../bar-grouped/bar-grouped.component";
import { ScrappingService } from '../scrapping.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-analytic',
    standalone: true,
    templateUrl: './analytic.component.html',
    styleUrl: './analytic.component.scss',
    imports: [GradientDonutComponent, PieComponent, BarGroupedComponent]
})
export class AnalyticComponent {

    positif:any;
    negatif:any;
    neutre:any;
   constructor(private service:ScrappingService){

    forkJoin({
        positif: this.service.getNombreArticlePositif(),
        negatif: this.service.getNombreArticleNegatif(),
        neutre: this.service.getNombreArticleNeutre()
      }).subscribe({
        next: (results) => {
          this.positif = results.positif.count;
          this.negatif = results.negatif.count;
          this.neutre = results.neutre.count;
        },
      
        error: (err) => {
          console.log(err);
        }

      })
    


   }


}
