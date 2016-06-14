import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredState = args[0];
    if (desiredState === "over 500 calories") {
      return input.filter((meal) => {
        return meal.calories >= 500;
      });
    } else {
      return input;
    }
  }
}
