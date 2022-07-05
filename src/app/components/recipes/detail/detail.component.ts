import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [],
})
export class DetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  manage = false;

  constructor() {}

  ngOnInit(): void {}

  toggleManage() {
    this.manage = !this.manage;
  }
}
