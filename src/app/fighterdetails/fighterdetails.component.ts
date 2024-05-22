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
  
    this.route.params.subscribe(params => {
      const fighterId = params['id'];
      this.getFighterDetails(fighterId);
    });
  }

  getFighterDetails(id: string) {
    this.fighterService.GetFightersbyId(id)
      .subscribe((data) => {
        this.fighter = data;
      });
  }
}