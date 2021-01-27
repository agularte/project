import { Component, Input, OnInit } from '@angular/core';
import { MessageService} from '../message.service';
import {formatDate} from '@angular/common';
// import { message } from '../interface/message.interface';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() tabName: string;
  
  // form = document.getElementById("message-form");
  pName: string = '';
  pImage: string = '';
  chat: string = '';
  constructor(
    private readonly msgService: MessageService
  ) { }

  ngOnInit(): void {
  }


  sendMessage(value:string): void{
    //should not be blank
    
    this.msgService.pushMessage(this.tabName,
      this.pImage,
      this.pName,
      formatDate(new Date(), 'MM/dd/yyyy hh:mm a', 'en'),
      value)

      
  }
  
}
