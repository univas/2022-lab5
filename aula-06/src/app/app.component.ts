import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  student = {
    name: 'rodrigo',
    email: 'Rodrigo@Gmail.com',
    age: 34,
    birthday: new Date(),
    weigth: 64.78,
    registro: '09245682455'
  }


}
