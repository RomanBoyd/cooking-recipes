import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class BackendService implements InMemoryDbService{

  constructor() { }

  createDb(): any {
    return {
      recipes: [
        {
          id: '1',
          name: 'Яичница с моцареллой',
          category: 'завтраки',
          description: [
            {step: 'Выскрести семена из перчика чили, нарезать его на кусочки и положить в большую холодную сковороду.'},
            {step: 'Тонко нарезать чеснок, добавить в сковороду вместе с 4 ст. л. оливкового масла и поставить на средний огонь. Слегка посолить, поперчить, добавить листики базилика и жарить, помешивая, примерно 1 минуту, пока можно нарезать помидоры.'},
            {step: 'Когда содержимое сковороды зашипит, добавить помидоры, а через пару минут кусочки моцареллы (просто отрывать их руками). Сделать небольшие углубления и вливать яйца по одному. Накрыть крышкой и готовить 3–5 минут, до желаемой консистенции. Обжарить в тостере хлеб. Приправить яичницу солью и черным перцем и подавать с ломтиками горячего хлеба.'},
          ],
          mealImg: 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120214140149/181002121534/p_O.jpg',
          ingredients: [
            {
              ingredient: 'Сушеный перец чили',
              measure: '1 штука'
            },
            {
              ingredient: 'Чеснок',
              measure: '1 зубчик'
            },
            {
              ingredient: 'Оливковое масло',
              measure: 'по вкусу'
            },
            {
              ingredient: 'Базилик',
              measure: '2 веточки'
            },
            {
              ingredient: 'Помидоры',
              measure: '6 штук'
            },
            {
              ingredient: 'Сыр моцарелла',
              measure: '125 г'
            },
            {
              ingredient: 'Куриное яйцо',
              measure: '6 штук'
            },
            {
              ingredient: 'Белый бездрожжевой хлеб',
              measure: '5 кусков'
            },
          ]
        },
        {
          id: '2',
          name: 'Творожно-ягодный завтрак',
          category: 'завтраки',
          description: [
            {step: 'Творог в блендере смешать с фруктами и взбить до однородного состояния.'},
            {step: 'На дно креманок выложить разломанные на небольшие кусочки бискотти и сверху выложить творог.'},
            {step: 'Посыпать мелко рубленными орехами и мюсли.'},
          ],
          mealImg: 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120131085240/140804165647/p_O.jpg',
          ingredients: [
            {
              ingredient: 'Орехи',
              measure: '20 г'
            },
            {
              ingredient: 'Мягкий обезжиренный творог',
              measure: '250 г'
            },
            {
              ingredient: 'Бискотти',
              measure: '3 штуки'
            },
            {
              ingredient: 'Мюсли',
              measure: '40 г'
            },
            {
              ingredient: 'Мёд',
              measure: 'по вкусу'
            },
            {
              ingredient: 'Свежие ягоды',
              measure: '150 г'
            },
          ]
        },
      ]
    };
  }
}
