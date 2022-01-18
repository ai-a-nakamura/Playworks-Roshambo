import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-up',
  templateUrl: './match-up.component.html',
  styleUrls: ['./match-up.component.css']
})
export class MatchUpComponent implements OnInit {

// 		"winnerbracketID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		choices: string[] = ["Rock", "Paper", "Scissors"];

		@Input() player1: string; //TODO: make player object
		@Input() player2: string;
		player1Choice: string;
		player2Choice: string;
		player1NumWin: int;
		player2NumWin: int;

  constructor() { }

  ngOnInit(): void {
		this.player1NumWin = 0;
		this.player2NumWin = 0;

  }

}
