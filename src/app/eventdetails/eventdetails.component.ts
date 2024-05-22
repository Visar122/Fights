import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FigherService } from '../figher-service';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrl: './eventdetails.component.css'
})
export class EventdetailsComponent implements OnInit {

  events:any;
  constructor(private route:ActivatedRoute,private fighterService:FigherService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const fights = params['id'];
      this.geteventsbyId(fights)
    });
  }

  geteventsbyId(id:string){
    this.fighterService.getEventById(id).subscribe((data)=>{
      this.events=data;
    });
  }
}
