import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharactersComponent} from './characters.component';
import {EpisodeModule} from "../episode/episode.module";
import {RouterModule} from "@angular/router";
import {CharactersDetailModule} from "../characters-detail/characters-detail.module";


@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    EpisodeModule,
    RouterModule,
    CharactersDetailModule
  ],
  exports: [CharactersComponent]
})
export class CharactersModule {
}
