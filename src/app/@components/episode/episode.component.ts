import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Character} from "../../interface/character";
import {ActivatedRoute} from "@angular/router";
import {InfoCharacterService} from "../../services/info-character.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
character$: Observable<Character>;

  constructor(private route: ActivatedRoute, private infoCharSvc: InfoCharacterService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id=params['id'];
      this.character$= this.infoCharSvc.getDetails(id);
      });
  }

}
