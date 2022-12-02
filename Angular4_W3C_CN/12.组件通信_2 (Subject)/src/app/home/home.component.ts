import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'exe-home',
    template: `
    <div>
        <h1>Home</h1>
        <button (click)="sendMessage()">Send Message</button>
        <button (click)="clearMessage()">Clear Message</button>
    </div>`
})
export class HomeComponent {
    constructor(private messageService: MessageService) {}

    sendMessage(): void {
        this.messageService.sendMessage('Message from Home Component to App Component!');
    }

    clearMessage(): void {
        this.messageService.clearMessage();
    }
}
