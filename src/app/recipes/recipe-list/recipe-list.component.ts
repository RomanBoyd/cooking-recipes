import { Component, OnInit } from '@angular/core';
import { IngredientsModel } from '../Ingredients.model';
import { RecipesModel } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes = [
    new RecipesModel(
      'Омлет',
      'Очень вкусный и простой завтрак',
      'https://im0-tub-ru.yandex.net/i?id=e09e326985a2cb39f08e82802bbce292&n=13',
      [new IngredientsModel('Яйцо', 4, 'шт')]
    ),
    new RecipesModel(
      'Шницель',
      'Как это можно не сьесть???',
      'https://im0-tub-ru.yandex.net/i?id=03760e197604e7c4624638ac3191bd58&n=13',
      [
        new IngredientsModel('Куринное филе', 1, 'кг'),
        new IngredientsModel('Сухари для панировки', 0.5, 'кг'),
      ]
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
