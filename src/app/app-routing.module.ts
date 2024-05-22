import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FighterdetailsComponent } from './fighterdetails/fighterdetails.component';
import { FighterRecordsComponentComponent } from './fighter-records-component/fighter-records-component.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { BoxingeventComponent } from './boxingevent/boxingevent.component';
import { UfceventsComponent } from './ufcevents/ufcevents.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'fighters', component: FighterRecordsComponentComponent },
  { path: 'fighterdetails/:id', component: FighterdetailsComponent },
  { path: 'eventdetails/:id', component: EventdetailsComponent },
  { path: 'boxingevent', component: BoxingeventComponent },
  { path: 'ufcEvent', component: UfceventsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
