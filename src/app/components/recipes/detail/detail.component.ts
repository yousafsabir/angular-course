import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [],
})
export class DetailComponent implements OnInit {
  manage = false;

  constructor() {}

  ngOnInit(): void {}

  toggleManage() {
    this.manage = !this.manage;
  }
}
