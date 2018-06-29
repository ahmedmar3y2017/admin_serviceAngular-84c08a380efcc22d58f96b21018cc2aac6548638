import {Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService{
  IsloggedIn :boolean;

// constructor() {
//   this.IsloggedIn = false;
//   }


  private serverPath:string = 'http://localhost:8080';

  constructor(private http:Http, private router:Router) { }
  SetUserLoggedIn(isloggedin:boolean){


    this.IsloggedIn = isloggedin;

  }


  getUserLogggedIn(){
    console.log("+_+" +this.IsloggedIn);

    return this.IsloggedIn;
  }


  sendCredential(username: string, password: string) {
    let url = this.serverPath+'/token';
    let encodedCredentials = btoa(username+":"+password);
    let basicHeader = "Basic "+encodedCredentials;
    let headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : basicHeader
    });
    console.log(basicHeader)
    return this.http.get(url, {headers: headers});
  }
//


  checkSession() {
    let url = this.serverPath+'/checkSession';
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

  logout() {
    let url = this.serverPath+'/user/logout';
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, '', {headers: headers});
  }















}
