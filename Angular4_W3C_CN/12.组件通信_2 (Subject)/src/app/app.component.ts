import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
     <div *ngIf="message">{{message.text}}</div>
     <exe-home></exe-home>
  </div>
  `
})
export class AppComponent {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
      this.subscription = this.messageService
                              .getMessage().subscribe( message => {
                                  this.message = message;
                               });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
