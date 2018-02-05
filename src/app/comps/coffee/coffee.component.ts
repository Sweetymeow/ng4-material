import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coffee } from '../../logic/Coffee';
import { TastingRating } from '../../logic/TastingRating';
import { GeoLocationService } from '../../services/geo-location.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})

export class CoffeeComponent implements OnInit {
  sliderConfige: any = {
    max: 10,
    min: 0,
    tickInt: 1
  };
  routingSubscription: any;
  coffee: Coffee;
  types: Array<string> = ['Cappuccino', 'Flat White', "Espresso", "Affogato", "Caffe Macchiato"];

  constructor(private route: ActivatedRoute, private geoLoc: GeoLocationService) { }

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params);
    });

    this.geoLoc.requestLocation( location => {
      if(location){
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    });
  }

  ngOnDestory(){
    this.routingSubscription.unsubscribe();
  }

  onRatingChanged(checked : boolean){
    // console.log(`Rating - Checked is ${checked}`)
    if(checked){
      this.coffee.tastingRating = new TastingRating();
    }else{
       this.coffee.tastingRating = null;
    }
  }

  saveRating(){
    // Save to BE service

  }
  cancelRating(){
    // Clear the data & return to previous page
  }

}
