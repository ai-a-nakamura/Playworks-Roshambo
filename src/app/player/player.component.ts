import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  // "winnerbracketID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
  // "matchupID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
  playerName: String = ";alsdhfg";
  email: String = "";
  isStillPlaying: boolean = false;
  roundsWon: number = 0;

  constructor(name: String, email: String) {
      this.playerName = name;
      this.email = email;
      this.isStillPlaying = true;
      this.roundsWon = 0;
   }

  ngOnInit(): void {
  }

}
