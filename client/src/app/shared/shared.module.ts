import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredientPipe} from './pipes/ingredient.pipe';
import {FormsModule} from '@angular/forms';
import {RecipesFilterPipe} from './pipes/recipes-filter.pipe';



@NgModule({
  declarations: [IngredientPipe, RecipesFilterPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    IngredientPipe,
    RecipesFilterPipe
  ],
  providers: [
  ]

})
export class SharedModule { }
