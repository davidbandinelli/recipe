import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';
// import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';

// uses Firebase as backend
@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private store: Store<fromApp.AppState>) {}

    /*
    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http
        .put('https://ng-backend-70542.firebaseio.com/recipes.json', recipes)
        .subscribe(response => {
            console.log(response);
        });
    }
    */

    fetchRecipes() {
        // unsubscribe automatico dopo una subscribe
        return this.http
            .get<Recipe[]>(
                    'https://ng-backend-70542.firebaseio.com/recipes.json'
            )
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []
                        };
                    });
                }),
                tap(recipes => {
                    // this.recipesService.setRecipes(recipes);
                    this.store.dispatch(new RecipesActions.SetRecipes(recipes));
                })
            );
    }
}
