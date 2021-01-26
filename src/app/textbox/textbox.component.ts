import { Component, Input, OnInit } from '@angular/core';
import { MessageService} from '../message.service';
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

  chat: string;
  constructor(
    private readonly msgService: MessageService
  ) { }

  ngOnInit(): void {
  }

  sendMessage(value:string): void{
    //should not be blank
    
    this.msgService.pushMessage(this.tabName,
      "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc2MzAyNDY4NjM0NzgwODQ1/joe-biden-gettyimages-1267438366.jpg",
      "Joe Biden",
      "Today at 01:47am",
      value)

      
  }
  
}
