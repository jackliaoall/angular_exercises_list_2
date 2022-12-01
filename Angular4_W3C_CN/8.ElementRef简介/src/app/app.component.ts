import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to Angular World</h1>
  <div #greet>Hello {{ name }}</div>
  `
})
export class AppComponent {
  name: string = 'element-ref';

  @ViewChild('greet')
  greetDiv: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) {
    // setTimeout(() => {
    //   let divEle = this.elementRef.nativeElement.querySelector('div');
    //   console.dir(divEle);
    // }, 0);
  }

  ngAfterViewInit(): void {
    // console.dir(this.elementRef.nativeElement.querySelector('div'));
    // this.greetDiv.nativeElement.style.backgroundColor  = 'red';
    this.renderer.setStyle(this.greetDiv.nativeElement, 'backgroundColor', 'red');
  }
}
