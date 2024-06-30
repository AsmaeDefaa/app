import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScrappingService } from '../scrapping.service';

@Component({
  selector: 'app-list-arcticle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-arcticle.component.html',
  styleUrl: './list-arcticle.component.scss'
})
export class ListArcticleComponent implements OnInit {
       constructor(private service:ScrappingService){}
  ngOnInit(): void {
    this.findAllArticles()
  }
        

   data:any = []

   length:any;

       findAllArticles(){
          this.service.findAllArticle().subscribe({
             next:(res)=>{
                
                this.data=res;
                this.length=this.data.length;
                console.log(this.data);
             },error:(err)=>{
                console.log(err);
             }
          })
       }
}
