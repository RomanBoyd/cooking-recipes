import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IRecipe} from '../../shared/services/recipe.service';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.scss']
})
export class OneRecipeComponent implements OnInit {
  recipeId: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.recipeId = id);
  }

}

