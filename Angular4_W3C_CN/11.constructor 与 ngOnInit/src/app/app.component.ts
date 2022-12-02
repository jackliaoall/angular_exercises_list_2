import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = '';

  constructor() {
    console.log('Constructor initialization');
    this.name = 'Semlinker';
  }

  ngOnInit() {
    console.log('ngOnInit hook has been called');
  }
}
