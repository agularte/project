import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentItem: string = "Tesla"
  items = ['Tesla', 'Toyota', 'Mazda']

  addItem(newItem: string){
    this.items.push(newItem);
  }
  title = 'project';
}
