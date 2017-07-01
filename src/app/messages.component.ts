import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

interface TextMessage {
    text: string;
    owner: string;
}

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

  constructor(private http : Http) {
    this.http.get('http://jsonplaceholder.typicode.com/photos')
      .map( response => {
        console.log(response.json());
        return response.json();
      } )
      .subscribe( res => this.myData = res );
      // Fake Online REST API: https://jsonplaceholder.typicode.com/
   }

  ngOnInit() {}
}
