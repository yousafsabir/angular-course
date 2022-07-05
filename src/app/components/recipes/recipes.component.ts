import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styles: [],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Recipe',
      'description for the recipe',
      'https://www.kookingk.com/wp-content/uploads/2018/12/APC_0649_eb0c3fe8c75c4b93b35b9a387753f54f-2000x1125.jpg'
    ),
    new Recipe(
      'Roasted Chicken',
      'make delecious roasted chicken with this recipe',
      'https://static.toiimg.com/thumb/53007558.cms?width=1200&height=900'
    ),
  ];

  recipeDetail: Recipe = new Recipe(
    'No recipe Selected',
    'description:',
    'https://i.pinimg.com/originals/b8/69/6f/b8696f8336db66cd43853838a1d6666e.jpg'
  );

  onRecipeChange(event: number) {
    this.recipeDetail = this.recipes[event];
  }

  constructor() {}

  ngOnInit(): void {}
}
