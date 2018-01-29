import { Injectable } from '@angular/core';

@Injectable()
export class GoogleNewsService {
  newsUrl: string = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=38074afad053477786abbd3329cab0cf';

  req: Request = new Request(this.newsUrl);

  constructor() { }

  sendFetch() {
    fetch(this.req).then( response => {
      console.log(response.json());
    });
  }
  // keys: 38074afad053477786abbd3329cab0cf

}
