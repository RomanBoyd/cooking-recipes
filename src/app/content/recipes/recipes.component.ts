import {Component, OnInit} from '@angular/core';
import {IRecipe, RecipeService} from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: IRecipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes.slice(1, 9));
  }
}
