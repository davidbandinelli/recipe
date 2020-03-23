import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputref: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputref: ElementRef;
  // ingredientAded = new EventEmitter<{name: string, amount: number}>();
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.nameInputref.nativeElement.value, this.amountInputref.nativeElement.value);
    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
