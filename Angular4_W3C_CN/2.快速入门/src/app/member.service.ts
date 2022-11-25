import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private http: HttpClient
  ) { }

  getMembers() {
    return this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
    .pipe(map((res: any) => res));
  }
}
