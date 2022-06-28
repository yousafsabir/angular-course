import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverDesc: string;
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverDesc: string;
  }>();

  @ViewChild('descRef', { static: true }) desc!: ElementRef;
  server = '';
  // we don't need this as we are using local referance on content input
  content = '';

  constructor() {}

  ngOnInit(): void {}

  addServer(content: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: this.server,
      serverContent: content.value,
      serverDesc: this.desc.nativeElement.value,
    });
  }
  addBluePrint(content: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: this.server,
      serverContent: content.value,
      serverDesc: this.desc.nativeElement.value,
    });
  }
}
