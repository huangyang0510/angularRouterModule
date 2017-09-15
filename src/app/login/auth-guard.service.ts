import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';


import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  // canActivate() {
  //   console.log('AuthGuard#canActivate called');
  //   return true;
  // }

  /**
   *
   * @param route 包含了即将被激活的路由
   * @param state 包含了该应用即将到达的状态
   */
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url:string):boolean{
    if(this.authService.isLoggedIn){
      return true;
    }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['./login']);
    return false;
  }
}