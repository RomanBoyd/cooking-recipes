export class IngredientsModel {
  name: string;
  amount: number;
  unit: string;

  constructor(name: string, amount: number, unit: string) {
    this.name = name;
    this.amount = amount;
    this.unit = unit;
  }
}
const ingredients = new IngredientsModel('Название', 1, 'Единица измерения');
