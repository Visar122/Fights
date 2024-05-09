import { Component } from '@angular/core';
import { FigherService } from '../figher-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showSearch: boolean = false;
  searchTerm: string = '';
  fighters: any[] = [];

  constructor(private fighterService: FigherService
    
    ) { }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchTerm = ''; // Clear search term when hiding the search input
      this.fighters = []; // Clear previous search results
    }
  }

  searchFighter() {
    if (!this.searchTerm.trim()) {
      this.fighters = []; // Clear search results if search term is empty
      return;
    }

    // Fetch both UFC and boxing fighters
    this.fighterService.getFighters('boxing').subscribe((boxingData: any) => {
      this.fighterService.getFighters('ufc').subscribe((ufcData: any) => {
        // Concatenate UFC and boxing fighters
        this.fighters = [...boxingData, ...ufcData];

        // Filter fighters based on search term
        this.fighters = this.fighters.filter((fighter) => fighter.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      });
    });
  }
}
