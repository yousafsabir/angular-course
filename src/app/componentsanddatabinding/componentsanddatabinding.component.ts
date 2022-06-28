import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentsanddatabinding',
  templateUrl: './componentsanddatabinding.component.html',
  styles: [],
})
export class ComponentsanddatabindingComponent implements OnInit {
  serverElements: {
    type: string;
    name: string;
    content: string;
    desc: string;
  }[] = [
    { type: 'server', name: 'server1', content: 'content1', desc: 'desc1' },
    { type: 'blueprint', name: 'server2', content: 'content2', desc: 'desc2' },
  ];
  constructor() {}

  ngOnInit(): void {}

  onServerAdded(event: {
    serverName: string;
    serverContent: string;
    serverDesc: string;
  }) {
    this.serverElements.push({
      type: 'server',
      name: event.serverName,
      content: event.serverContent,
      desc: event.serverDesc,
    });
  }
  onBluePrintAdded(event: {
    serverName: string;
    serverContent: string;
    serverDesc: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.serverName,
      content: event.serverContent,
      desc: event.serverDesc,
    });
  }
}
