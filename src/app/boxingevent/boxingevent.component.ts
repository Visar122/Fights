import { Component, OnInit } from '@angular/core';
import { FigherService } from '../figher-service';

@Component({
  selector: 'app-boxingevent',
  templateUrl: './boxingevent.component.html',
  styleUrl: './boxingevent.component.css'
})
export class BoxingeventComponent implements OnInit {

  boxingevents:any[]=[];


  constructor(private fighterService:FigherService){}

  ngOnInit(): void {
      this.getBoxingEvents();
  }

  getBoxingEvents(){
    this.fighterService.getBoxingEvents().subscribe(events=>{
      this.boxingevents=events;
    })
  }
}
