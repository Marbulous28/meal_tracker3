import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {SortPipe} from './sort.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [SortPipe],
  template: `
  <meal-display *ngFor="#currentMeal of mealList | calories: filterCalories"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>

  <select (change)="onChange($event.target.value)">
    <option value="over 500 calories">Show High Calorie Meals</option>
    <option value="all" selected="selected">Show All Meals</option>
  </select>

  <edit-meal-details *ngIf="selectedMeal"[meal]="selectedMeal"></edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public filterCalories: string;
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  createMeal(meal: Meal): void {
    meal.id = this.mealList.length;
      this.mealList.push(meal);
  }
  onChange(option: string) {
    this.filterCalories = option;
  }
}
