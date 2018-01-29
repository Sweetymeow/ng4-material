import { Injectable } from '@angular/core';
import { Coffee } from '../logic/Coffee';
import { PlaceLocation } from '../logic/PlaceLocation';

@Injectable()
export class ChartDataService {
  constructor() { }

  // API Sample: https://costco-bakery-planning.cfapps.sap.hana.ondemand.com/api/warehouse/148/dataUtil/getPredictionPerformanceAnalysis/item_id/14368
  getItem(){}

  getList(callback){
    // TODO Chang it with a real web Service
    const list = [
      new Coffee('Expresso', "Sunny CAFE", new PlaceLocation("123 Market St", "SF", 0, 0)),
      new Coffee('Caramel Americano', "Starbuck", new PlaceLocation('Gran Via 34', "Madrid"))
    ];
    callback(list);
  }

  saveData(coffee, callback){
    // TODO Chang it with a real web Service
    callback(coffee);
  }

}
