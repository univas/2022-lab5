import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newStudent = {} as Student
  studentList : Student[] = []

  saveData(form: NgForm) {
    this.studentList.push(this.newStudent)
    this.newStudent = {} as Student
    form.resetForm()
  }

}
