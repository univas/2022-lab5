import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  teams : Team[] = []

  constructor(private service : TeamService) {
    this.teams = this.service.getList()
  }

  ngOnInit(): void {
  }

}
