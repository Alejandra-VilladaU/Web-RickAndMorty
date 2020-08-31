import {Component, OnInit} from '@angular/core';
import {Character} from "../../interfaces/character";
import {InfoCharacterService} from "../../info-character.service";
import {take} from "rxjs/operators";
type InfoReques={
  next:string;
};

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  info: InfoReques={
    next:null,
  }

  private query:string;


  constructor(private infoCharacterSv: InfoCharacterService) {}

  ngOnInit(): void {
  this.getDataService();
    /*fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data=>{ })*/
  }

  private getDataService(): void{
    this.infoCharacterSv.findCharacters(this.query)
      .pipe(
        take(1)
      ).subscribe((response:any)=>{
        console.log('responseee',response);

        const {info,results}=response;
        this.characters=[...this.characters, ...results];
        this.info=info;
    })
  }

}
