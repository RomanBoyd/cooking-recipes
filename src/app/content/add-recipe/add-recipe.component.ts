import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IRecipe, RecipeService} from '../../shared/services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService
    ) { }

  form: FormGroup;
  ingredients: FormArray;
  description: FormArray;

  ngOnInit(): void {
    this.form = this.fb.group({
      id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10),
      name: this.fb.control('', [Validators.required]),
      category: this.fb.control('', [Validators.required]),
      ingredients: this.fb.array([this.createIngredient()]),
      description: this.fb.array([this.createDescription()]),
      mealImg: this.fb.control('', [Validators.required])
    });
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      ingredient: this.fb.control('', [Validators.required]),
      measure: this.fb.control('', [Validators.required])
    });
  }

  addIngredient(): void {
    this.ingredients = this.form.get('ingredients') as FormArray;
    this.ingredients.push(this.createIngredient());
  }

  deleteIngredient(): void {
    if (this.ingredients.length > 1) {
      this.ingredients = this.form.get('ingredients') as FormArray;
      this.ingredients.removeAt(this.ingredients.length - 1);
    }
  }

  createDescription(): FormGroup {
    return this.fb.group({
      step: this.fb.control('', [Validators.required, Validators.minLength(5)])
    });
  }

  addDescription(): void {
    this.description = this.form.get('description') as FormArray;
    this.description.push(this.createDescription());
  }

  deleteDescription(): void {
    if (this.description.length > 1) {
      this.description = this.form.get('description') as FormArray;
      this.description.removeAt(this.description.length - 1);
    }
  }

  addRecipe(): void {
    this.recipeService.addRecipe(this.form.value as IRecipe)
      .subscribe( () => {
        this.form.reset();
      });
  }
}
