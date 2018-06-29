import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { promise } from 'protractor';

@Injectable()
export class AuthGuard implements CanActivate {

  state:boolean = false ;


  constructor (private authService:UserService ,private router :Router,private loginService : UserService ) {

  }
  //
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

    //console.log(this.authService.getUserLogggedIn());

    // debugger;
    // this.state= this.authService.getUserLogggedIn();
    // if (this.state) {

    //   return  true;
    // } else {

    //     this.router.navigate(['authentication/login']);

    this.loginService.checkSession().subscribe(
      res => {
        //this.loggedin=true
        console.log('========================')
        //  this.loginService.SetUserLoggedIn(this.loggedin);
        this.state=true;
        this.router.navigate(['dashboard']);

      },
      error => {
        this.state=false;
        //this.loginService.SetUserLoggedIn(this.loggedin);
        this.router.navigate(['authentication/login']);
      }
    );

    console.log('state '+ this.state)
    return this.state;



  }
}
