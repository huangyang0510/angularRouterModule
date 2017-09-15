import { Component } from "@angular/core";

@Component({
  template:`
    <h3>ADMIN</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"></a>
      <a routerLink="./crisis" routerLinkActive="active"></a>
      <a routerLink="./heroes" routerLinkActive="active"></a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {

}
