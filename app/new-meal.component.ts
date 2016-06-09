import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';


@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div>
        <h3>Create Meal:</h3>
        <input placeholder="Name" #name>
        <input placeholder="Details" #details>
        <input placeholder="Calories" #calories>
        <button (click)="addMeal(name, details, calories)">Add</button>
   </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement){
    var newMeal = new Meal(name.value, details.value, calories.value, 0)
    this.onSubmitNewMeal.emit(newMeal);
    name.value = "";
    details.value ="";
    calories.value = "";
  }
}
