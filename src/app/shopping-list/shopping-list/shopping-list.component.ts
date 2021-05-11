import { Component, OnInit } from '@angular/core';
import {RecipeItemComponent} from '../../recipes/recipe-item/recipe-item.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  recipe = new RecipeItemComponent();

  constructor() { }

  ngOnInit(): void {
  }

}
