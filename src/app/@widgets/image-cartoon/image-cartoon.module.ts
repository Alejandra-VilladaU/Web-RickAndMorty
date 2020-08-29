import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCartoonComponent } from './image-cartoon.component';



@NgModule({
  declarations: [ImageCartoonComponent],
  imports: [
    CommonModule
  ],
  exports:[ImageCartoonComponent]
})
export class ImageCartoonModule { }
