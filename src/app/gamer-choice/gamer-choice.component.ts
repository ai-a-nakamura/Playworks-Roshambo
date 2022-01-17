import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gamer-choice',
  templateUrl: './gamer-choice.component.html',
  styleUrls: ['./gamer-choice.component.css']
})
export class GamerChoiceComponent implements OnInit {


  constructor() { }

  @Input() choiceType: string = '';
  @Input() svgURL: string = '';

  playerSelection: string = '';

  ngOnInit(): void {
  }

  onClick(): void {
    this.playerSelection = this.choiceType + " chosen";
  }

}
