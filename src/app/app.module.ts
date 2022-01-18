import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamerChoiceComponent } from './gamer-choice/gamer-choice.component';
import { MatchUpComponent } from './match-up/match-up.component';

@NgModule({
  declarations: [
    AppComponent,
    GamerChoiceComponent,
    MatchUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
