import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ForModule } from '@rx-angular/template/experimental/for';
import { LetModule } from '@rx-angular/template/let';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LetModule,
    ForModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
