import {Component, OnInit} from '@angular/core';
import {Character} from "../../interface/character";
import {InfoCharacterService} from "../../services/info-character.service";
import {take} from "rxjs/operators";

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  characters: Character[] = [];

  info: RequestInfo = {
    next: null,
  };

  private pageNum = 1;
  private query: string;
  private showScroll = 500;
  private hideScroll = 200;

  constructor(private infoCharSvc: InfoCharacterService) {
  }

  ngOnInit(): void {
    this.getDataFindSvc();
  }

  private getDataFindSvc(): void {
    this.infoCharSvc.findCharacters(this.query, this.pageNum)
      .pipe(
        take(1),
      ).subscribe((res: any) => {
        console.log('Respuesta', res)
      const {info, results} = res;
      this.characters = [...this.characters, ...results];
      this.info = info;
    });
  }
}
