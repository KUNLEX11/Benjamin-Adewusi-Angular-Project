import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit{
  allComment: any;


constructor(private fetchService: FetchService){

}
ngOnInit(): void {
  this.getAllComments();
}

getAllComments(){
  this.fetchService.getAllComment().subscribe((res: any)=>{
    this.allComment = res;
    console.log('res: ',res)

  })
}

}
