import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {BASE_URL_TOKEN} from '../../config';
import {catchError} from 'rxjs/operators';


export interface IRecipe {
  _id: string;
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

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL_TOKEN) private baseUrl: string
    ) { }


  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  public getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`${this.baseUrl}recipes`)
      .pipe(
        catchError(this.handleError('getRecipes', []))
      );
  }

  public getRecipe(id): Observable<IRecipe> {
     return this.http.get<IRecipe>(`${this.baseUrl}recipes/` + id)
       .pipe(
         catchError(this.handleError<IRecipe>(`getRecipe id=${id}`))
       );
  }

  public addRecipe(recipe: IRecipe): Observable<IRecipe> {
    return this.http.post<IRecipe>(`${this.baseUrl}recipes`, recipe, httpOptions)
      .pipe(
        catchError(this.handleError<IRecipe>('addRecipe'))
      );
  }
  public deleteRecipe(id): Observable<IRecipe> {
    return this.http.delete<IRecipe>(`${this.baseUrl}recipes/` + id)
      .pipe(
        catchError(this.handleError<IRecipe>(`deleteRecipe`))
      );
  }
}
