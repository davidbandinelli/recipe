import { Ingredient } from '../shared/ingredient.model';
// import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { NotExpr } from '@angular/compiler';

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    // private ingredients: Ingredient[] = [
    //     new Ingredient('Apples', 5),
    //     new Ingredient('Tomatoes', 10)
    // ];
    private ingredients: Ingredient[] = [];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // cross component event emitter has been replace by rxjs/subject
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
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
