import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FighterdetailsComponent } from './fighterdetails/fighterdetails.component';
import { FighterRecordsComponentComponent } from './fighter-records-component/fighter-records-component.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'fighters', component: FighterRecordsComponentComponent },
  { path: 'fighterdetails/:id', component: FighterdetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
