import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  data : number[] = [11,2,30,4,5,6];

  sortasc():void{
     this.data.sort((a,b) => {return a<b?-1:a>b?1:0});
 }


  sortdsc():void{
       this.data.sort((a,b) => {return a>b?-1:a<b?1:0});
 }

}
