import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <br>
    <h1>{{ meal.name }}:</h1>
    <h4>Description: {{ meal.description }}</h4>
    <h4>Calories: {{ meal.calories }}</h4>
    <br>
  `
})
export class MealComponent {
  public meal: Meal;
}
