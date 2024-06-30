import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InstanceOfprojectComponent } from './instance-ofproject/instance-ofproject.component';
import { ChartComponent } from 'ng-apexcharts';
import { ChartTestComponent } from './chart/chart.component';
import { DashedComponent } from './dashed/dashed.component';
import { ListArcticleComponent } from './list-arcticle/list-arcticle.component';
import { GradientDonutComponent } from './gradient-donut/gradient-donut.component';
import { AnalyticComponent } from './analytic/analytic.component';
import { LineAreaComponent } from './line-area/line-area.component';

export const routes: Routes = [

    {
        path:"",
        component:AppComponent,
        children : [
            {
                 path:"",
                 component:InstanceOfprojectComponent,
                 children:[
                   {
                     path:"",
                     component:AnalyticComponent
                   },


                    {
                        path:"dash",
                        component:LineAreaComponent
                    },
                    {
                        
                        path:"list",
                        component:ListArcticleComponent
                        
                    }
                 ]
            }
        ]
    },

    {
        path:"dash",
        component:DashedComponent
    }
];
