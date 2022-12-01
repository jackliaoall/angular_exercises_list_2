import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  template: `
    <ul>
      <li *ngFor="let hero of heros">
        ID: {{hero.id}} - Name: {{hero.name}}
      </li>
    </ul>
  `,
  providers: [HeroService]
})
export class HeroComponent implements OnInit {
  heros: Array<{ id: number, name: string }>;

  constructor(
    private heroSerivce: HeroService
  ) { }

  ngOnInit(): void {
    this.heros = this.heroSerivce.getHeros();
  }

}
