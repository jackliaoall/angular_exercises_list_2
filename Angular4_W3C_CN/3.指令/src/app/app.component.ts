import { Component, TemplateRef, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive';

  @ViewChild('tpl') tplRef: TemplateRef<any>;

  context = { message: 'Hello ngOutletContext!',
    $implicit: 'Hello, Semlinker!' };

  condition: boolean = false;

  constructor(private vcRef: ViewContainerRef) {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.vcRef.createEmbeddedView(this.tplRef);
  }
}
