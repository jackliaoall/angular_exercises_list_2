import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // (1)
// import 'rxjs/add/operator/map'; // (2)
import { map } from 'rxjs/operators';
import { MemberService } from '../member.service';

interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'sl-members',
  templateUrl: './sl-members.component.html',
  styleUrls: ['./sl-members.component.scss']
})
export class SlMembersComponent implements OnInit {
  members: Member[];

  constructor(
    private http: HttpClient,
    private memberService: MemberService
  ) { } // (3)

   async ngOnInit() {
    // this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`) // (4)
    // .pipe(map((res: any) => res)) // (5)
    // .subscribe(data => {
    //    if (data) this.members = data; // (6)
    // });

    this.memberService.getMembers()
      .subscribe(data => {
        if (data) this.members = data;
      });
   }
}
