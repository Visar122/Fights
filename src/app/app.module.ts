import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FighterRecordsComponentComponent } from './fighter-records-component/fighter-records-component.component';
import { FighterdetailsComponent } from './fighterdetails/fighterdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { BoxingeventComponent } from './boxingevent/boxingevent.component';
import { UfceventsComponent } from './ufcevents/ufcevents.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FighterRecordsComponentComponent,
    FighterdetailsComponent,
    EventdetailsComponent,
    BoxingeventComponent,
    UfceventsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    SlickCarouselModule, // Put in here
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
