import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  manage = false;

  constructor() {}

  ngOnInit(): void {}

  toggleManage() {
    this.manage = !this.manage;
  }
}
