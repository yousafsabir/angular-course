import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number;
  @Output() emitIndex = new EventEmitter<number>();

  onRecipeClick() {
    this.emitIndex.emit(this.index);
  }

  constructor() {}

  ngOnInit(): void {}
}
