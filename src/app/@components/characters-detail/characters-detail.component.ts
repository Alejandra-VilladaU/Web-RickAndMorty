import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {Character} from "../../interface/character";
import {InfoCharacterService} from "../../services/info-character.service";
import {take} from "rxjs/operators";
import {DOCUMENT} from "@angular/common";

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

  showGoBtn= false;
  private pageNum = 1;
  private query: string;
  private showScroll = 500;
  private hideScroll = 200;

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private infoCharSvc: InfoCharacterService) {
  }

  ngOnInit(): void {
    this.getDataFindSvc();
  }

  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop)> this.showScroll ){
      this.showGoBtn = true;
    } else if (this.showGoBtn && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop)< this.hideScroll){
this.showGoBtn= false;
    }
  }

  onScrollD(){
    if(this.info.next){
      this.pageNum++;
      this.getDataFindSvc();
    }
  }

  onScrollUp():void{
    this.document.body.scrollTop= 0;
    this.document.documentElement.scrollTop= 0;
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
