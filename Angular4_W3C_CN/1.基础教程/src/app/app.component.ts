import { MailService } from './mail.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>{{title}}</h3>
    <div>
      <app-simple-form></app-simple-form>
      {{mailService.message}}
      <p>API_URL: {{apiUrl}}</p>
    </div>
    <ul>
      <li *ngFor="let message of mailService.messages; index as i;">
        {{i}} - {{message.text}}
      </li>
    </ul>
    <app-simple-form *ngFor="let message of mailService.messages"
        [message]="message.text"
        (update)="onUpdate(message.id, $event.text)"
      >
    </app-simple-form>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello, Angular';

  constructor(
    // public mailService: MailService
    @Inject(MailService) public mailService,
    @Inject('apiUrl') public apiUrl
  ) {}

  onUpdate(id, text) {
    this.mailService.update(id, text);
  }
}
