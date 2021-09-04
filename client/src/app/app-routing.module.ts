import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from './content/recipes/recipes.component';
import {OneRecipeComponent} from './content/one-recipe/one-recipe.component';
import {AddRecipeComponent} from './content/add-recipe/add-recipe.component';
import {Page404Component} from './content/page404/page404.component';




const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:id', component: OneRecipeComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
