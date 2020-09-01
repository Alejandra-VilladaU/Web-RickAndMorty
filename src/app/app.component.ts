import { Component } from '@angular/core';
import {CharactersComponent} from './@components/characters/characters.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'rickAndMorty-Web';
}



//console.log(api.getCharacter())
