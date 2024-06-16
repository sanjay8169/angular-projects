import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {
  fname : string = "";
  lname : string = "";
  email : string = "";
  address : string = "";
  skill : string[] = [];

  

  skilssarr : string[] = ["HTML","JavaScript","Anular","C#","SQL"];

  skillselarr : boolean[] = this.skilssarr.map((a)=>false);
  newskill: string = "";
  language  :string = "";
  otherlanguage : boolean = false;

  skillchange(i : number):void{
    console.log("before",this.skillselarr);
    console.log("after",this.skillselarr);
   }

   
  Addskill():void{
    if(this.newskill != ""){
    this.skill.push(this.newskill + " ");
    this.newskill = "";
    }
  }
  
  languagechange(e : any){

    this.language = e.target.value;

  }

  



}
