import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InfoCharacterService {

  constructor() {
    fetch("https://rickandmortyapi.com/api/character")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
    // this.http.get("https://rickandmortyapi.com/api/character");
  }
 /* getCharacter() {
    this.http.get("https://rickandmortyapi.com/api/character").subscribe(data => {
      console.log(data);
    });*/
  // @ts-ignore

  }

