import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    input.ng-invalid {
        border: 3px solid red;
    }
    input.ng-valid {
        border: 3px solid green;
    }
  `
  ],
  template: `
    <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm.value)">
    <fieldset ngModelGroup="user">
      <input
      type="text"
      required
      minlength="3"
      name="username"
      [(ngModel)]="username"
      #userName="ngModel">
      <hr>
      <p>Name控件的valid状态：{{userName.valid}} - 表示控件有效</p>
      <p>Name控件的invalid状态：{{userName.invalid}} - 表示控件无效</p>
      <p>Name控件的pristine状态：{{userName.pristine}} - 表示控件值未改变</p>
      <p>Name控件的dirty状态：{{userName.dirty}} - 表示控件值已改变</p>
      <p>Name控件的touched状态：{{userName.touched}} - 表示控件已被访问过</p>
      <p>Name控件的untouched状态：{{userName.untouched}} - 表示控件未被访问过</p>
      <div *ngIf="userName.errors?.required">请您输入用户名</div>
      <div *ngIf="userName.errors?.minlength">
        用户名的长度必须大于 {{userName.errors?.minlength.requiredLength}}，当前的长度为
          {{userName.errors?.minlength.actualLength}}
      </div>
      <input type="password" required ngModel name="password">
    </fieldset>
      <button type="submit">提交</button>
      <hr>
      {{loginForm.value | json}}
    </form>
  `
})
export class AppComponent {
  username = 'semlinker';

  onSubmit(value) {
    console.dir(value);
  }
}
