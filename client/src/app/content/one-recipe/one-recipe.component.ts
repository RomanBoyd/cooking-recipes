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
  popup = false;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.id = res.id;
      this.recipeService.getRecipe(this.id).subscribe(data => {
        this.recipe = data;
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/recipes']);
  }

  goPopup(): void {
    this.popup = true;
  }

  closePopup(): void {
    this.popup = false;
  }

  deleteRecipe(): void {
    this.recipeService.deleteRecipe(this.id).subscribe();
    this.router.navigate(['/recipes']);
  }
}

