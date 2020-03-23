import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();
    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('Wienerschnitzel',
        'tasty cotoletta',
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        // tslint:disable-next-line:max-line-length
        new Recipe('Big Burger',
        'very big burger',
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        // returns a copy of the array
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
