import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';
import { TeamService, TeamsTableHeaders } from '../services/teamservice.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {
  teams!: Team[];
  public tableHeaders = TeamsTableHeaders;
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(res => {
      this.teams = res.map( e => {
        return {
          //id: e.payload.doc.id,
          //...e.payload.doc.data()
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object )
        } as Team;
      })
    });    
  }
 

  
}

