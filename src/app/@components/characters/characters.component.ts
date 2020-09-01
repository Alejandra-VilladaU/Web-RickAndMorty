import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})


export class CharactersComponent implements OnInit {
  listCharacters: Array<any> = [];
  data: any;

  constructor() {
  }


  ngOnInit(): void {

  }

}

