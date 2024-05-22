import { Component, OnInit } from '@angular/core';
import { FigherService } from '../figher-service';

@Component({
  selector: 'app-ufcevents',
  templateUrl: './ufcevents.component.html',
  styleUrl: './ufcevents.component.css'
})
export class UfceventsComponent implements OnInit {
  ufcevents:any[]=[];


  constructor(private fighterService:FigherService){}

  ngOnInit(): void {
      this.getBoxingEvents();
  }

  getBoxingEvents(){
    this.fighterService.getUfcEvents().subscribe(events=>{
      this.ufcevents=events;
    })
  }

}
