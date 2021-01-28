import { Component, OnInit, Input } from '@angular/core';
import { message } from '../interface/message.interface';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() tabName : string;
  
  constructor(
    private readonly msgService: MessageService
  ) { }

  ngOnInit(): void {
  }
  //grabs the string data of what tab the user is in
  //this makes sure that messages are posted to the correct
  //place as well as only displaying the correct messages
  getTabData(key : string) : message[]{
    return this.msgService.loadData(key);
  }

  delMsg(index : number){
    this.msgService.delMessage(this.tabName, index);
  }
}
