import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}
      <!-- <input #myInput type="text" (keydown.enter)="onEnter($event, myInput.value)" [(ngModel)]="message"> -->
      <input #myInput
        type="text"
        [(ngModel)]="message"
        [ngClass]="{mousedown: isMousedown}"
        (mousedown)="isMousedown = true"
        (mouseup)="isMousedown = false"
        (mouseleave)="isMousedown = false"
      >
      <!-- <button (click)="onClick($event, myInput.value)">Click</button> -->
      <button (click)="update.emit({text: message})">更新</button>
    </div>
  `,
  styles: [`
    :host { margin: 10px; }

    input: focus { font-weight: bold; }
  `
  ]
})
export class SimpleFormComponent implements OnInit {
  @Input() message: string;
  @Output() update = new EventEmitter<{text: string}>();

  isMousedown: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  public onEnter(event, value) {
    console.log(event);
    console.log(value);
  }

}
