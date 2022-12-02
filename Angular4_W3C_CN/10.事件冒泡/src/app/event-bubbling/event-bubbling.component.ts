import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-bubbling',
  templateUrl: './event-bubbling.component.html',
  styleUrls: ['./event-bubbling.component.scss']
})
export class EventBubblingComponent implements OnInit {
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(button: string) {
    event.stopPropagation();
    this.click.next(button);
  }
}
