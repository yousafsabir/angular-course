import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [],
})
export class ServerComponent implements OnInit {
  @Input('theElement') element!: {
    type: string;
    name: string;
    content: string;
    desc: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
