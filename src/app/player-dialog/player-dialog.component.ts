import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { PlayerService } from '../services/player.service';
import { Country } from '../interfaces/country'; 
import { take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { SquadNumber } from '../interfaces/squadNumber';
import { TeamService } from '../services/teamservice.service';
import { player } from '../interfaces/player';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {
  @Input() player: player | undefined ;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();
  private team :any;
 // public countries = Object.keys(Country).map(key => ({ label: key, key: Country[key] }));
  public squadNumber = Object.keys(SquadNumber)
    .slice(Object.keys(SquadNumber).length / 2)
    .map(key => ({
      label: key,
      key: SquadNumber[key as unknown as number]
    }));
  constructor(private playerService: PlayerService, private teamService: TeamService) {}

  ngOnInit() {
    this.teamService
      .getTeams()
      .pipe(take(1))
      .subscribe(teams => {
        if (teams.length > 0) {
          this.team = teams[0];
        }
      });
  }

  private newPlayer(playerFormValue: any) {
    const key = this.playerService.createPlayer(playerFormValue);
    const playerFormValueKey = {
      ...playerFormValue,
      key
    };
    const formattedTeam = {
      ...this.team,
      players: [...(this.team.players ? this.team.players : []), playerFormValueKey]
    };
    this.teamService.updateTeams(formattedTeam);
  }

  private editPlayer(playerFormValue: any) {
 /*   const playerFormValueWithKey = { ...playerFormValue, $key: this.player.$key };
    const playerFormValueWithFormattedKey = { ...playerFormValue, key: this.player.$key };
    delete playerFormValueWithFormattedKey.$key;
    const moddifiedPlayers = this.team.players
      ? this.team.players.map(player => {
          return player.key === this.player.$key ? playerFormValueWithFormattedKey : player;
        })
      : this.team.players;
    const formattedTeam = {
      ...this.team,
      players: [...(moddifiedPlayers ? moddifiedPlayers : [playerFormValueWithFormattedKey])]
    };
    this.playerService.editPlayer(playerFormValueWithKey);
    this.teamService.editTeam(formattedTeam);*/
  }

  onSubmit(playerForm: NgForm) {
    const playerFormValue = { ...playerForm.value };
    if (playerForm.valid) {
      playerFormValue.leftFooted = playerFormValue.leftFooted === '' ? false : playerFormValue.leftFooted;
    }
    if (this.player) {
      this.editPlayer(playerFormValue);
    } else {
      this.newPlayer(playerFormValue);
    }
    window.location.replace('#');
  }

  onClose() {
    this.closeDialog.emit(true);
  }
  submit(form:any){

    var firstName = form.firstName;

    console.log(firstName);

  

    var lastName = form.lastName;

    console.log(lastName);

  

    var comment = form.comment;

    console.log(comment);

  }

}
