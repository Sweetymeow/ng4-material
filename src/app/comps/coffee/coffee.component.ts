import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coffee } from '../../logic/Coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})

export class CoffeeComponent implements OnInit {

  routingSubscription: any;
  coffee: Coffee;
  types: Array<string> = ['Cappuccino', 'Flat White', "Espresso", "Affogato", "Caffe Macchiato"];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params);
    })
  }

  ngOnDestory(){
    this.routingSubscription.unsubscribe();
  }

}
