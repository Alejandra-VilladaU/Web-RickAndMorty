import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'charactersDetail/:id',
    loadChildren:()=>
      import('./@components/characters-detail/characters-detail.module'
        ).then((m)=> m.CharactersDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
