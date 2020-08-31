import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Character} from "./interfaces/character";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InfoCharacterService {

  constructor(private http: HttpClient) {

    fetch("https://rickandmortyapi.com/api/character/")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }

  findCharacters(query='', page=1){
    return this.http.get<Character[]>(
      `${environment.baseUrlApiWeb}/?name=${query}&page=${page}`);
  }
  getDetail(id:number){
    return this.http.get<Character>(
      `${environment.baseUrlApiWeb}/${id}`)
  }
}

