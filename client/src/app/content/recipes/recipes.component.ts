import {Component, OnInit} from '@angular/core';
import {IRecipe, RecipeService} from '../../shared/services/recipe.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{

  constructor(
    private recipeService: RecipeService
  ) {}

  recipes: Observable<IRecipe[]> | undefined;

  searchText = '';


  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  search(text: string): void {
    setTimeout(() => {
      this.searchText = text;
    }, 1000);
  }

}
