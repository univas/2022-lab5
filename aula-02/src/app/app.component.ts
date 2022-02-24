import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula-02'

  studentEmail = ''

  currentImageSource = 'assets/bandeira1.jpg'

  sendMessage() {
    alert('E-mail do aluno: ' + this.studentEmail)
  }

  changeVariable() {
    this.studentEmail = (new Date()).toString() +
        '@gmail.com'
  }
}
