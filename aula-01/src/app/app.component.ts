import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter : number = 0
  title : any = 'Univas'

  pizza = "Frango com Catupiry"

  age = 10

  itsRaining = false

  student = {
    name: 'Felipe',
    lastName: 'Silva',
    phone: '1234-1234'
  }

  incrementCounter() {
    this.counter++
  }
}
