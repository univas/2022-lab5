import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from './team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newTeam  : Team = {} as Team
  teamList : Team[] = []

  saveData(myForm: NgForm) {
    this.teamList.push(this.newTeam)
    this.teamList.sort(this.sortData)
    this.newTeam = {} as Team
    myForm.resetForm()
  }

  sortData = (a : Team, b : Team) => b.points - a.points
}
