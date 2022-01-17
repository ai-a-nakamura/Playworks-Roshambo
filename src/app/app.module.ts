import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamerChoiceComponent } from './gamer-choice/gamer-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    GamerChoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
