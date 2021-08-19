import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form: FormGroup;
  ingredients: FormArray;
  steps: FormArray;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      ingredients: this.fb.array([this.createIngredient()]),
      steps: this.fb.array([this.createStep()]),
      image: this.fb.control('', [Validators.required])
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

  createStep(): FormGroup {
    return this.fb.group({
      step: this.fb.control('', [Validators.required])
    });
  }

  addStep(): void {
    this.steps = this.form.get('steps') as FormArray;
    this.steps.push(this.createStep());
  }

  deleteStep(): void {
    if (this.steps.length > 1) {
      this.steps = this.form.get('steps') as FormArray;
      this.steps.removeAt(this.steps.length - 1);
    }
  }

  addRecipe(): void {
    this.form.reset();
  }

}
