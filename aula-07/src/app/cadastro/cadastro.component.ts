import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  newTeam : Team = {} as Team

  constructor(private service: TeamService) { }

  ngOnInit(): void {
  }

  save() {
    this.service.save(this.newTeam)
    this.newTeam = {} as Team
  }
}
