import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {


  
  fname: string = "";
  lname: string = "";
  role : string = "";
  error: string = "";
  count:number = 0;

  getinccount():number{
    return this.count++;
  }

  person : person[] = [{
    id: this.getinccount(),
    fname: 'rohit',
    lname: 'sharma',
    role: 'batsman'
  },
{
  id: this.getinccount(),
  fname: 'virat',
  lname: 'kohli',
  role: 'batsman'
},
{
  id: this.getinccount(),
  fname: 'jaspreet',
  lname: 'bumrah',
  role: 'bowler'
},
{
  id: this.getinccount(),
  fname: 'arshdeep',
  lname: 'singh',
  role: 'bowler'
}];


removeperson(id : number):void{
  this.person.splice(id,1);
}

Addperson() : void{

  var flag : boolean = true;
  this.error = "";

  if(this.fname==""){
    this.error = "Please enter first name"
    flag = false;
  }
  else if(this.lname == ""){
    this.error = "Please enter last name"
    flag = false;
  }
  else if(this.role == ""){
    this.error = "Please enter role"
    flag = false;
  }

  if(flag){
    this.person.push({
      fname: this.fname,
      lname: this.lname,
      id: this.getinccount(),
      role: this.role
    })
  }

}



sortascfname() : void{

  this.person.sort((a,b) => a.fname<b.fname ? -1 : (a.fname>b.fname ? 1 :0));

}

sortasclname():void{
  this.person.sort((a,b) => a.lname<b.lname ? -1 : a.lname>b.lname ? 1 :0);

}


sortdscfname() : void{

  this.person.sort((a,b) => a.fname<b.fname ? 1 : (a.fname>b.fname ? -1 :0));

}

sortdsclname():void{
  this.person.sort((a,b) => a.lname<b.lname ? 1 : a.lname>b.lname ? -1 :0);

}

sortascrole():void{
  this.person.sort((a,b) => a.role < b.role ? -1 : a.role>b.role ? 1 : 0);
}
sortdscrole():void{
  this.person.sort((a,b) => a.role < b.role ? 1 : a.role>b.role ? -1:0);
}


}

type NewType = {
  id: number;
  fname: string;
  lname: string;
  role: string;
};

type person  = NewType
