import { Component } from '@angular/core';

@Component({
  selector: 'exe-app',
  template: `
<p>{{changeMsg}}</p>
   <exe-counter [count]="initialCount"
    (change)="countChange($event)"></exe-counter>
  `
})
export class AppComponent {
  initialCount: number = 5;
  changeMsg: string;

  countChange (event: number) {
    this.changeMsg = `子组件change事件已触发，当前值是: ${event}`;
  }
}
