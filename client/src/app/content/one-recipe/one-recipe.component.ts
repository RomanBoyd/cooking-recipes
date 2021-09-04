import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IRecipe, RecipeService} from '../../shared/services/recipe.service';


@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.scss']
})
export class OneRecipeComponent implements OnInit  {
  displayedColumns: string[] = ['item', 'cost'];
  recipe: IRecipe;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id;
    this.activatedRoute.params.subscribe(res => {
      id = res.id;
      this.recipeService.getRecipe(id).subscribe(data => {
        this.recipe = data;
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/recipes']);
  }
}

