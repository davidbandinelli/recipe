import { Ingredient } from '../shared/ingredient.module';
// import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // cross component event emitter has been replace by rxjs/subject
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        /*
        for (let ingredient of ingredients) {
            this.addIngredient(ingredient);
        }
        */
       // spread operator ... trasforma un array in una lista
       this.ingredients.push(...ingredients);
       // this.ingredientsChanged.emit(this.ingredients.slice());
       this.ingredientsChanged.next(this.ingredients.slice());
    }
}
