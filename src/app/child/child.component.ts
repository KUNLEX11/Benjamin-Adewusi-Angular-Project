import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() numofC: number;
  @Output() numofCitiesVisitedEmit: EventEmitter<number>;
  citiesCount: number = 0;
  
  constructor(){
    this.numofCitiesVisitedEmit = new EventEmitter<number>();
  }


  increaseCitiescount(){
    this.citiesCount +=1;
    this.numofCitiesVisitedEmit.emit(this.citiesCount);

  }

  decreaseCitiescount(){
    this.citiesCount -=1;
    this.numofCitiesVisitedEmit.emit(this.citiesCount);

  }

// myCity: string = 'lagos';
// cities: string[] = ['oshogbo','enugu','kano','benin','akure'];
// numofCities : number = 0;
// constructor(){
//   this.numofCities = this.cities.length
// }
}
