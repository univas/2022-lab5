import { Injectable } from '@angular/core';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamList : Team[] = []

  constructor() { }

  save(team: Team) {
    this.teamList.push(team)
  }

  getList() {
    return this.teamList
  }
}
