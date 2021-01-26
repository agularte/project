import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-projects',
  templateUrl: './internal-projects.component.html',
  styleUrls: ['./internal-projects.component.css']
})
export class InternalProjectsComponent implements OnInit {
  tabName = "internalProjects";
  constructor() { }

  ngOnInit(): void {
  }

}
