import { Component } from '@angular/core';

import { GamerChoiceComponent } from './gamer-choice/gamer-choice.component';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';
  rock = 'rock';
  paper = 'paper';
  scissors = 'scissors';

  player1: PlayerComponent = new PlayerComponent("Shaun", "s@s.s");
  player2: PlayerComponent = new PlayerComponent("Connie", "c@c.c");
}
