import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link = 'users'


  change() {
    if (this.link == 'users') {
      this.link = 'products'
    } else {
      this.link = 'users'
    }
  }

}
