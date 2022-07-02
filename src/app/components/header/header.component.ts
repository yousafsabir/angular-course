import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  toggle = true;
  @Output() toggleEmit = new EventEmitter();

  onRecipe() {
    this.toggle = true;
    this.toggleEmit.emit(this.toggle);
  }
  onShopping() {
    this.toggle = false;
    this.toggleEmit.emit(this.toggle);
  }

  manage = false;

  constructor() {}

  ngOnInit(): void {}

  toggleManage() {
    this.manage = !this.manage;
  }
}
