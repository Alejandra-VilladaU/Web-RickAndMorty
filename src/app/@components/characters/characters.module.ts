import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";



@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule, InfiniteScrollModule
  ],
  exports:[CharactersComponent]
})
export class CharactersModule { }
