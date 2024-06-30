import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
    selector: 'app-instance-ofproject',
    standalone: true,
    templateUrl: './instance-ofproject.component.html',
    styleUrls: ['./instance-ofproject.component.scss'],
    imports: [RouterOutlet,RouterLink,CommonModule]
})
export class InstanceOfprojectComponent implements AfterViewInit{
    constructor(private elementRef: ElementRef) {
    
       
      }
    
    
      ngAfterViewInit(): void {
        const arrowElements = this.elementRef.nativeElement.querySelectorAll('.arrow');
        
        for (let i = 0; i < arrowElements.length; i++) {
          arrowElements[i].addEventListener('click', (e:any) => {
            const arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle('showMenu');
          });
        }
        
        const sidebarBtn = this.elementRef.nativeElement.querySelector('.bx-menu');
        const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
        
        sidebar.classList.remove('close'); // Ensure that the sidebar does not have the 'close' class initially
        sidebarBtn.addEventListener('click', () => {
          sidebar.classList.toggle('close');
        });
      }


      
}
