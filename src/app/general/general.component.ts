import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  
  constructor(
    // private readonly fb: FormBuilder,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToMarketing(): void {
    this.router.navigate(
      ['./marketing'])
}
}
