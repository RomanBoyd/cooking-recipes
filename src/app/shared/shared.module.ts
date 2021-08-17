import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredientPipe} from './pipes/ingredient.pipe';
import {FormsModule} from '@angular/forms';
import {RecipeResolverService} from './services/recipe-resolver.service';
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
    RecipeResolverService
  ]

})
export class SharedModule { }
