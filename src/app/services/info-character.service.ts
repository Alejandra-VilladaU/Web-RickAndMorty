import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Character} from "../interface/character";

@Injectable({
  providedIn: 'root'
})
export class InfoCharacterService {

  constructor(private http: HttpClient) {

  }

  findCharacters(query='', page=1) {
return this.http.get<Character[]>(
  `${environment.urlBaseApi}/?name=${query}&page=${page}`)
  }

  getDetails(id: number) {
    return this.http.get<Character>(
      `${environment.urlBaseApi}/${id}`)
  }
}

