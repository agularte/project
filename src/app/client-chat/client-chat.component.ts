import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-chat',
  templateUrl: './client-chat.component.html',
  styleUrls: ['./client-chat.component.css']
})
export class ClientChatComponent implements OnInit {
  tabName = "client";
  constructor() { }

  ngOnInit(): void {
  }

}
