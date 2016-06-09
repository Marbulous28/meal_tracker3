import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';


@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div>
        <h3>Create Meal:</h3>
        <input placeholder="Name" #newName>
        <button (click)="addMeal(newName)">Add</button>
   </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userDescription: HTMLInputElement){
    this.onSubmitNewMeal.emit(userDescription.value);
    userDescription.value = "";
  }
}
