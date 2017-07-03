import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

//import { TextMessage } from 'textMessage';

@Injectable()
export class WebService {
  constructor(private http : Http){}

  getMessages() {
    return this.http
              .get('http://localhost:1234/messages')
              .toPromise();
    // .toPromise(): converted the Observable to a Promise using the toPromise operator.
  }
}
