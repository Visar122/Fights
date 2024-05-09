import { Component } from '@angular/core';
import { FigherService } from '../figher-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fighter-records-component',
  templateUrl: './fighter-records-component.component.html',
  styleUrl: './fighter-records-component.component.css'
})
export class FighterRecordsComponentComponent {
  fighters: any[] = [];
  searchTerm: string = '';
  noFighters: boolean = false;
  ufcfighter:boolean=false;
  constructor(private fighterService:FigherService,private route:Router) { }

  ngOnInit(): void {
    this.getFighters('fighters'); // Initial load, you can choose 'ufc' as well
  }
  navigateToFighterDetails(fighterId: string) {
    this.route.navigate(['/fighterdetails', fighterId]);
  }
  
  getFighters(category: string) {
    this.fighterService.getFighters(category)
      .subscribe((data) => {
        this.fighters = data;
        this.noFighters = this.fighters.length === 0;
      });
  }

  searchFighter() {
    if (!this.searchTerm.trim()) {
      return;
    }
    this.fighterService.getFighters('fighters') // Or 'ufc'
      .subscribe((data) => {
       
        this.fighters = data.filter((fighter) => fighter.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        this.noFighters = this.fighters.length === 0; // Update noFighters based on the length of fighters array
        console.log(data)
      });
    

    }
  }


