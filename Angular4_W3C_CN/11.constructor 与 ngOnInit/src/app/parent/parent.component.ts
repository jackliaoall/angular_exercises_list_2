import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exe-parent',
  template: `
    <h1>Welcome to Angular World</h1>
    <p>Hello {{name}}</p>
    <exe-child [pname]="name"></exe-child>
  `,
})
export class ParentComponent implements OnInit {
  name: string = '';

  constructor() {
    this.name = 'Semlinker';
  }

  ngOnInit() {
  }
}
