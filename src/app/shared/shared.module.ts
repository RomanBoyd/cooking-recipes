import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredientPipe} from './pipes/ingredient.pipe';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [IngredientPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    IngredientPipe
  ],
})
export class SharedModule { }
