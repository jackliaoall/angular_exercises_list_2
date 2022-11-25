import { Component, OnInit } from '@angular/core';

interface Address {
  province: string;
  city: string;
}

@Component({
  selector: 'sl-user',
  templateUrl: './sl-user.component.html',
  styleUrls: ['./sl-user.component.scss']
})
export class SlUserComponent implements OnInit {
  name: string;
  address: Address;
  showSkills: boolean;
  skills: string[];

  constructor() {
    this.name = 'Semlinker';
    this.address = {
      province: 'Taichung',
      city: '太平'
    };
    this.showSkills = true;
    this.skills = ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x'];
  }

  ngOnInit(): void {
  }

  toggleSkills() {
    this.showSkills = !this.showSkills;
  }

  addSkill(skill: string) {
    let skillStr = skill.trim();
    if (this.skills.indexOf(skillStr) === -1) {
      this.skills.push(skill);
    }
  }
}
