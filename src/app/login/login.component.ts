import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MessageService} from '../message.service';
import { message } from '../interface/message.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private readonly router: Router,
    private readonly msgService: MessageService) { }

  ngOnInit(): void {
  }

  goToGeneral(): void {
    this.router.navigate(
      ['./general'])
}

}