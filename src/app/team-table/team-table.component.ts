import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';
import { TeamService } from '../services/teamservice.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {
  Teams: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(res => {
      this.Teams = res.map( e => {
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

