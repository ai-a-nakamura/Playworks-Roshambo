import { Component, OnInit, Input } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-match-up',
  templateUrl: './match-up.component.html',
  styleUrls: ['./match-up.component.css']
})
export class MatchUpComponent implements OnInit {

// 		"winnerbracketID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
choices: string[] = ["Rock", "Paper", "Scissors"];

// 		@Input() player1: string; //TODO: make player object
// 		@Input() player2: string;

@Input() player1!: PlayerComponent;
@Input() player2!: PlayerComponent;


  player1Choice: number = -1;
  player2Choice: number = -1;
  player1NumWin: number = 0;
  player2NumWin: number = 0;

  constructor() { }

  ngOnInit(): void {
		this.player1NumWin = 0;
		this.player2NumWin = 0;
  }

  onClick(option: number, p: string): void {
    if (p === "p1") {
      if (this.player1Choice === -1){
        this.player1Choice = option;
        console.log(this.player1.playerName);
      }
    }
    else {
      if (this.player2Choice === -1){
        this.player2Choice = option;
        console.log(this.player2.playerName);
      }
    }
  }


  // TODO: how to rerender <p> so it doesn't error out?
  // ExpressionChangedAfterItHasBeenCheckedError
  tieCheck(): boolean {
    if ((this.player1Choice !== -1 && this.player2Choice !== -1) && 
       (this.player1Choice === this.player2Choice)) {
      console.log("it's a tie");
      this.player1Choice = -1;
      this.player2Choice = -1;
      console.log(this.player1Choice);
      console.log(this.player2Choice);
      return true;
    }
    return false;
  }

  winCheck(): boolean {
    
    if (this.player1Choice !== -1 && this.player2Choice !== -1) {
      const p1 = this.choices[this.player1Choice];
      const p2 = this.choices[this.player2Choice];

      switch (p1) {
        case 'Rock': {
          if (p2 === 'Paper') {
            console.log(this.player1.playerName + " won");
          }
          else if (p2 === 'Scissors') {
            console.log(this.player2.playerName + " won");
          }
          break;
        }

        case 'Paper': {
          if (p2 === 'Rock') {
            console.log(this.player1.playerName + " won");
          }
          else if (p2 === 'Scissors') {
            console.log(this.player2.playerName + " won");
          }
          break;
        }

        case 'Scissors': {
          if (p2 === 'Paper') {
            console.log(this.player1.playerName + " won");
          }
          else if (p2 === 'Rock') {
            console.log(this.player2.playerName + " won");
          }
          break;
        }
      }
      return true;
    }
    return false;
  }

}
