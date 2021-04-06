export class RecipesModel {
    name = '';
    description = '';
    imageUrl = '';

    constructor(name: string, description: string, imageUrl: string) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
const recipes = new RecipesModel('Название', 'Описание', 'Ссылка на изображение');
