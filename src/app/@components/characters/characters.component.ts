import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  listCharacters: Array<any>=[{}];

  constructor() {

  }

  ngOnInit(): void {
    // const $person=document.querySelector('#person')
    // function renderPerson(image) {
    //   $person.setAttribute('src',image)
    // }
    //
    // fetch('https://rickandmortyapi.com/api/character/')
    //   .then(response => response.json())
    //   .then(data=>{
    //  //debugger
    //     renderPerson(data.image)
    //   })
  }

}
