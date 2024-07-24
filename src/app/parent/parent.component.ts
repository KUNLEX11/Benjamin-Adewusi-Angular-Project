import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   myCity: string = 'lagos';
   cities: Array<string>= ['lagos','Oshogbo','Enugu','Kano','Benin'];
   numofCities: number;
  statesVisited: Array<string> = [];
   numofCitiesCountAccepted: number; //this property gets what the child emits


  constructor(){
     this.numofCities = this.cities.length;
     this.numofCitiesCountAccepted =0;
  }

  ngOnInit() {
   this.getstatesVisited();
   
    
  }
  getstatesVisited(){
    this.statesVisited = ['Kebbi','Lokoja','Kaduna','Anambra'];
    return this.statesVisited.length;
    
  }
  numofCitiesCount(a: any){
    this.numofCitiesCountAccepted = a;

  }

  

}
