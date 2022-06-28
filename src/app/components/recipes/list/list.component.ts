import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Recipe',
      'description for the recipe',
      'https://www.kookingk.com/wp-content/uploads/2018/12/APC_0649_eb0c3fe8c75c4b93b35b9a387753f54f-2000x1125.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
