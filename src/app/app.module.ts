import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './content/search/search.component';
import { RecipesComponent } from './content/recipes/recipes.component';
import {SharedModule} from './shared/shared.module';
import { OneRecipeComponent } from './content/one-recipe/one-recipe.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AddRecipeComponent } from './content/add-recipe/add-recipe.component';
import { Page404Component } from './content/page404/page404.component';
import {BASE_URL_TOKEN, baseUrl} from './config';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    RecipesComponent,
    OneRecipeComponent,
    AddRecipeComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: BASE_URL_TOKEN,
      useValue: baseUrl,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
