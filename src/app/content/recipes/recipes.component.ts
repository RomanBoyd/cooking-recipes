import {Component, Input, OnInit} from '@angular/core';
import {IRecipes} from '../../../../mocks/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  @Input() recipes: IRecipes[];

  constructor() { }

  ngOnInit(): void {
  }

}
