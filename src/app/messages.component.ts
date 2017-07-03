import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WebService } from './web.service';

import { TextMessage } from './textMessage';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
})

export class MessagesComponent implements OnInit {
  textMessages : Array<TextMessage> = [
    {  text: 'some text', owner: 'Tim'  },
    {  text: 'other text', owner: 'Han'  }
  ];
  myData: Array<any>;

  constructor(private http : Http, private webService: WebService) {
    this.http.get('http://jsonplaceholder.typicode.com/photos')
      .map( response => {
        console.log(response.json());
        return response.json();
      } )
      .subscribe( res => this.myData = res );
      // Fake Online REST API: https://jsonplaceholder.typicode.com/
   }

   async ngOnInit(){
    var response  = await this.webService.getMessages();
    console.log(response.json());
  }
}
