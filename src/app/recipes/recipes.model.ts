import { IngredientsModel } from './Ingredients.model';

export class RecipesModel {
    name: string;
    description: string;
    imageUrl: string;
    ingredients: IngredientsModel[];

    constructor(name: string, description: string, imageUrl: string, ingredients: IngredientsModel[]) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
    }
}
