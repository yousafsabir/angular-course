import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thebasics',
  templateUrl: './thebasics.component.html',
})
export class ThebasicsComponent implements OnInit {
  allowNew = false;
  username = '';
  name = '';
  age: number = NaN;
  data = [
    { name: 'yousaf', age: 19 },
    { name: 'ismail', age: 21 },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onClear() {
    this.username = '';
  }

  onShow() {
    this.allowNew = !this.allowNew;
  }

  onAdd() {
    this.data.push({ name: this.name, age: this.age });
    this.name = '';
    this.age = NaN;
  }
}
