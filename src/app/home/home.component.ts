import { Component, OnInit } from '@angular/core';
import { FigherService } from '../figher-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularfights: any; 
  currentIndex: number = 0;
  interval: any;
  constructor(private fighterService: FigherService) { }

  ngOnInit(): void {
    this.fighterService.PopularFights().subscribe(
      (data) => {
        this.popularfights = data;
        console.log('Popular fights data:', this.popularfights);
     
      },
      (error) => {
        console.error('Error fetching popular fights:', error);
        // Handle error, e.g., show error message
      }
    );
  }

}
 

