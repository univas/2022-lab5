import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user = ''

  guestList = ['Maria', 'João', 'José']
  
  sayHello(value: string) {
    alert(`Olá ${value}`)
    this.user = value
  }

}
