import { Component, OnInit } from '@angular/core';
// nutze Message-Service
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // selber constructor wie in Hero-Service um Datenübertragung zu erleichtern
              // DIESMAL PUBLIC, damit es im template ausgegeben werden kann - Angular only binds to public component properties.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
