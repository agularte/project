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

  getTabData(key : string) : message[]{
    return this.msgService.loadData(key);
  }
}
