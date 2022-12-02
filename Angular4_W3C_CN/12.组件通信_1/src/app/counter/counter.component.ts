import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exe-counter',
  template: `
  <p>当前值: {{ count }}</p>
  <button (click)="increment()"> + </button>
  <button (click)="decrement()"> - </button>
`
})
export class CounterComponent implements OnInit {
  @Input() count: number = 0;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {

  }

  increment() {
      this.count++;
      this.change.emit(this.count);
  }

  decrement() {
      this.count--;
      this.change.emit(this.count);
  }

}
