import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ChartDataService } from './services/chart-data.service';
import { GeoLocationService } from './services/geo-location.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule } from '@angular/material';

import 'hammerjs';
import { ChartComponent } from './comps/chart/chart.component';
import { ListComponent } from './comps/list/list.component';
import { CoffeeComponent } from './comps/coffee/coffee.component';

const appRoutes: Routes = [
  {path: 'coffee', component: CoffeeComponent},
  {path: 'coffee/:id', component: CoffeeComponent},
  {path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule
  ],
  providers: [ChartDataService, GeoLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
