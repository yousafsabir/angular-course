import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  toggle = 'recipe';
  @Output() toggleEmit = new EventEmitter();

  onSelect(tab: string) {
    this.toggle = tab;
    this.toggleEmit.emit(this.toggle);
  }

  manage = false;

  constructor() {}

  ngOnInit(): void {}

  toggleManage() {
    this.manage = !this.manage;
  }
}
