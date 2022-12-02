import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'exe-child',
  template: `
   <p>父组件的名称：{{pname}} </p>
  `
})
export class ChildComponent implements OnInit {
  @Input()
  pname: string; // 父组件的名称

  constructor() {
      console.log('ChildComponent constructor', this.pname); // Output：undefined
  }

  ngOnInit() {
      console.log('ChildComponent ngOnInit', this.pname);
  }
}
