import { Pipe, PipeTransform } from '@angular/core';
import {IRecipe} from '../services/recipe.service';

@Pipe({
  name: 'recipesFilter'
})
export class RecipesFilterPipe implements PipeTransform {

  transform(recipes: IRecipe[], searchTerm: string): IRecipe[] {
    if (!searchTerm) {
      return recipes;
    }
    return recipes.filter((recipe: IRecipe) =>
    `${recipe.name}`.toLocaleLowerCase().includes(searchTerm.toLowerCase()));
  }
}
