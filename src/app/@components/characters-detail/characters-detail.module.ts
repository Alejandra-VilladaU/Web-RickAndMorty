import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDetailComponent } from './characters-detail.component';
import {RouterModule} from "@angular/router";
import {EpisodeModule} from "../episode/episode.module";
import {CharactersModule} from "../characters/characters.module";


@NgModule({
  declarations: [CharactersDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    EpisodeModule
  ],
  exports:[CharactersDetailComponent]
})
export class CharactersDetailModule { }
