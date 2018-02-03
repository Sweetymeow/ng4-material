import { Injectable } from '@angular/core';

@Injectable()
export class GoogleNewsService {
  newsUrl: string;
  req : any;

  constructor() {
    this.newUrl = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=38074afad053477786abbd3329cab0cf';
  }

  sendFetch() {
    this.req = new Request(this.newsUrl);

    // fetch(this.req).then( response => {
    //   console.log(response);
    //   // response.json()
    // });
  }
  // keys: 38074afad053477786abbd3329cab0cf

}
