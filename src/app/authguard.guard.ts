import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {UserService} from "src/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private  userService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    !this.userService.userIsLogIn.value && this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }})
    return this.userService.userIsLogIn.value;
  }

}
