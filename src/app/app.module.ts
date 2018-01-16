import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChartDataService } from './services/chart-data.service';
import { GeoLocationService } from './services/geo-location.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChartDataService, GeoLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
