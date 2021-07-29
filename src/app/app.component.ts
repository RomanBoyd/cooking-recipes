import { Component } from '@angular/core';
import {allRecipes} from '../../mocks/recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public recipes = allRecipes;
}
