import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FighterRecordsComponentComponent } from './fighter-records-component/fighter-records-component.component';
import { FighterdetailsComponent } from './fighterdetails/fighterdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FighterRecordsComponentComponent,
    FighterdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
