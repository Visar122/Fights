import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FigherService } from '../figher-service';
@Component({
  selector: 'app-fighterdetails',
  templateUrl: './fighterdetails.component.html',
  styleUrls: ['./fighterdetails.component.css'] // Corrected property name to styleUrls
})
export class FighterdetailsComponent implements OnInit {
  fighter: any;

  constructor(private route: ActivatedRoute, private fighterService: FigherService) {}

  ngOnInit(): void {
    this.getFighterDetails(this.fighter); // Replace 1 with the desired fighter ID
  }

  getFighterDetails(id: string) {
    this.fighterService.getFighterById(id)
      .subscribe((data) => {
        this.fighter = data;
      });
  }
}