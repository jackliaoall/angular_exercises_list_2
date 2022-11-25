import { Directive, HostBinding, Input, HostListener, Attribute } from '@angular/core';

@Directive({
  selector: '[greet]'
})
export class GreetDirective {

  // @HostBinding() innerText = 'Hello, Everyone!';

  @Input() greet: string;

  @HostBinding() get innerText(): string {
    return this.greet;
  }

  @HostListener('click', ['$event'])
    onClick(event) {
      this.greet = 'Clicked!';
    }

  constructor(@Attribute('author') public author: string) {
    console.log(author);
  }
}
