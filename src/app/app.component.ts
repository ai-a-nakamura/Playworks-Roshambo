import { Component } from '@angular/core';

import { GamerChoiceComponent } from './gamer-choice/gamer-choice.component';

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
}
