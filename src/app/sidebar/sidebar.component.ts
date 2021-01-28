import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  //routing functions
  goToMarketing(): void {
    this.router.navigate(
      ['./marketing'])
}
  goToRandom(): void {
    this.router.navigate(
      ['./random'])
}
  goToGeneral(): void {
    this.router.navigate(
      ['./general'])
}
  goToInternal(): void {
    this.router.navigate(
      ['./internal-projects'])
}
  goToClient(): void {
    this.router.navigate(
      ['./client-chat'])
}
  goToLogin(): void {
  this.router.navigate(
    [''])
}

}
