import { Component, OnInit } from '@angular/core';

interface TextMessage {
    text: string;
    owner: string;
}
@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent implements OnInit {
  textMessages : Array<TextMessage> = [{
    text: 'some text', owner: 'Tim'
  }, {
    text: 'other text', owner: 'Han'
  }];
  constructor() {  }

  ngOnInit() {}
}
