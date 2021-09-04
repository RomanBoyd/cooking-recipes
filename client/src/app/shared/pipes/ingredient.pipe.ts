import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredient'
})
export class IngredientPipe implements PipeTransform {

  transform(countOfIngredients: number | undefined): string {
    const cases = [2, 0, 1, 1, 1, 2];
    const rewAll = ['ингредиент', 'ингредиента', 'ингредиентов'];

    return `${countOfIngredients} ${rewAll[(countOfIngredients % 100 > 4 && countOfIngredients % 100 < 20) ? 2 : cases[(countOfIngredients % 10 < 5) ? countOfIngredients % 10 : 5]]}`;
  }

}
