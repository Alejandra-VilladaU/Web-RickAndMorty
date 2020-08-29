import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CharactersModule} from "./@components/characters/characters.module";
import {CopyrightModule} from "./@components/copyright/copyright.module";
import {EpisodeModule} from "./@components/episode/episode.module";
import {FooterModule} from "./@components/footer/footer.module";
import {HeaderModule} from "./@components/header/header.module";
import {NavbarModule} from "./@components/navbar/navbar.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    CopyrightModule,
    EpisodeModule,
    FooterModule,
    HeaderModule,
    NavbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
