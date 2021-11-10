import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { player } from '../interfaces/player';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/teamservice.service';


@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit {
  public players!:player[];
  public selectedPlayer: player | undefined;
  public showModal = false;
  constructor(private playerService: PlayerService, private teamService: TeamService) {}

  ngOnInit() {
  //  this.players = this.playerService.getPlayers();


   this.playerService.getPlayers().subscribe(res => {
    this.players = res.map( e => {
      return {
        //id: e.payload.doc.id,
        //...e.payload.doc.data()
        id: e.payload.doc.id,
        ...(e.payload.doc.data() as object)
      }as player;
    })
  });

  }

  newPlayer() {
    this.showModal = true;
    this.selectedPlayer = undefined;
    setTimeout(() => {
      window.location.replace('#open-modal');
    });
  }

  editPlayer(player: player) {
    this.selectedPlayer = { ...player };
    this.showModal = true;
    setTimeout(() => {
      window.location.replace('#open-modal');
    });
  }

  deletePlayer(player: player) {
   /* this.teamService
      .getTeams()
      .pipe(take(1))
      .subscribe(teams => {
        const moddifiedPlayers = teams[0].players ? teams[0].players.filter((p: any) => p.key !== player.$key) : teams[0].players;
        const formattedTeam = {
          ...teams[0],
          players: [...moddifiedPlayers]
        };
        this.playerService.deletePlayer(player.$key);
        this.teamService.editTeam(formattedTeam);
      });*/
  }

  closeDialog() {
    this.showModal = false;
  }
}
