import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor(private serData:DataService){

  }
  ngOnInit(): void {
    this.serData.hello()
  }
myfunction(num:number){
return num*2;
}
}
