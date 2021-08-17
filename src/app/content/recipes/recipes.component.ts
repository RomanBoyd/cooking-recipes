import {Component, OnInit} from '@angular/core';
import {IRecipe, RecipeService} from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{

  constructor(
    private recipeService: RecipeService
  ) {}

  recipes: IRecipe[];

  searchText = '';


  ngOnInit(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  search(text: string): void {
    this.searchText = text;
  }

}
