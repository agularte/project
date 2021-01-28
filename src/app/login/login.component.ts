import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MessageService} from '../message.service';
import { message } from '../interface/message.interface';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private readonly router: Router,
    private readonly msgService: MessageService,
    private readonly profile: ProfileService) { }

  ngOnInit(): void {
  }
  //sending the name and image URL to the profile service to be used for messages
  goToGeneral(name: string, image: string): void {
    this.profile.profile(name, image);
    this.router.navigate(
      ['./general'])
}

}