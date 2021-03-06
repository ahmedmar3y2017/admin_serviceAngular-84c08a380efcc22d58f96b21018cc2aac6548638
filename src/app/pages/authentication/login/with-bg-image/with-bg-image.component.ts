import { UserService } from './../../../../shared/Services/user.service';
import { element } from 'protractor';
import { Router } from '@angular/router';
import { AuthComponent } from './../../../../layout/auth/auth.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../../shared/Services/register.service';
import { Admin } from '../../../../shared/Entities/admin';
import { UploadFileService } from '../../../../shared/Services/uploadservice/upload-file-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html',
  styleUrls: ['./with-bg-image.component.css']
})
export class WithBgImageComponent implements OnInit {

  // **************************************

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };




  // ********************************
  IsAuth: boolean;


  complexForm: FormGroup;

  //admin: Admin = {
  //
  //   id: 0,
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   active: 1,
  //   phone: "",
  //   address1: "",
  //   address2: "",
  //   city: "",
  //   state: "",
  //   country: "",
  //   postalCode: 0,
  //   lastActive: new Date(),
  //   registerDate: new Date(),
  //   role: "",
  //   username: "",
  //   adminLevel: "",
  //   available: true
  //
  // };

  private credential = {'username':'', 'password':''};

  constructor(private loginService : UserService , private loginRouter:Router , fb: FormBuilder,private uploadService:UploadFileService) {

    this.complexForm = fb.group({
      //, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')

      'email' :  [null, Validators.compose([Validators.required])],

      'password': [null, Validators.required],

    })
  }


  loggedin:boolean



  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedin=true
        console.log('++++++++++++++++++++++')
        this.loginService.SetUserLoggedIn(this.loggedin);
      },
      error => {
        this.loggedin=false
        console.log('--------------------------')

        this.loginService.SetUserLoggedIn(this.loggedin);

      }
    );

  }

  loginFun(e) {
    e.preventDefault();
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      res => {
        console.log("log");
        console.log(res);
        localStorage.setItem("xAuthToken", res.json().token);
        // this.loggedIn = true;
        this.loginService.SetUserLoggedIn(true);
        // this.IsloggedIn = true;

        this.loginRouter.navigate(['dashboard']);
      },
      error => {
        // this.loggedIn = false;
        // this.loginError = true;
        this.loginRouter.navigate(['authentication/login']);


      }
    );
  }


  // ***************************************************


  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }




  // *******************************************************







}
