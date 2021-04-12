import { Component, OnInit } from '@angular/core';
import {RecipesModel} from '../recipes.model';
import {IngredientsModel} from '../Ingredients.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  recipes = [
    new RecipesModel(
      'Омлет',
      'Простой омлет с сыром',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzilu7DHA4Fmi7qy5OrTfIEkz-a97WZbLyw&usqp=CAU',
      [new IngredientsModel('Куриное яйцо', 4, 'шт.')]),
    new RecipesModel(
      'Ростбиф',
      'Праздничный ростбиф',
      'https://volshebnaya-eda.ru/wp-content/uploads/2018/03/rostbif-iz-govyadiny-9-810x540.jpg',
      [
        new IngredientsModel('Говядина', 1, 'кг.'),
        new IngredientsModel('Свежемолотый черный перец', 1, 'ст. л.')
      ]),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
