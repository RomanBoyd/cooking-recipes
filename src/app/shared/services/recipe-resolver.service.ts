import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IRecipe} from './recipe.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class RecipeResolverService implements Resolve<IRecipe | null>{

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<IRecipe | null>  {
    const id = route.paramMap.get('id');
    return this.http.get(`/api/recipes/${id}`)
      .pipe(
        map((recipe: IRecipe | null) => {
          if (!recipe) {
            this.router.navigate(['404']);
          }
          return recipe;
        }),
        catchError(() => {
          this.router.navigate(['404']);
          return of(null);
        })
      );
  }
}
