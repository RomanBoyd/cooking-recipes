import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {BASE_URL_TOKEN} from '../../config';


export interface IRecipe {
  id: string;
  name: string;
  category: string;
  description: Instruction[];
  mealImg: string;
  ingredients: Ingredient[];
}

export interface Instruction {
  step: string;
}

export interface Ingredient {
  ingredient: string;
  measure: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL_TOKEN) private baseUrl: string
    ) { }

  public getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>('/api/recipes/');
  }

  public getRecipe(id): Observable<IRecipe> {
     return this.http.get<IRecipe>('/api/recipes/' + id);
  }
}
