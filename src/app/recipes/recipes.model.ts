export class RecipesModel {
    name = '';
    description = '';
    imageUrl = '';

    constructor(name: string, desription: string, imageUrl: string,) {
        this.name = name;
        this.description = desription;
        this.imageUrl = imageUrl;
    };
}