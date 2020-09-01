import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})


export class CharactersComponent implements OnInit {
  listCharacters: Array<any> = [];
  data: any;

  constructor() { }


  ngOnInit(): void {

    /* const $contenido=document.querySelector('#contenido')
   * function renderContenido(image) {
       $contenido.setAttribute('src',image)
     }
     fetch('https://rickandmortyapi.com/api/character/')
       .then(response => response.json())
       .then(data=>{
         //debugger
         renderContenido(data.image)
       })*/

    /*
    * fetch('https://rickandmortyapi.com/api/character/')
    * .then(response =>response.json())
    * .then(data =>console.log(data))
    * .catch(error => console.error('Ocurrio un error'))
    * */
  }
 /* getCharacter(){
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response)=> response.json())
      .then((data)=> console.log(data))
  }*/
}

