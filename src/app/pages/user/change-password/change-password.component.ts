import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

   //password-input
   passwordType: string = 'password';
   passwordIcon: string = 'fa fa-eye';


  constructor() { }

  ngOnInit() {
  }

    // hideShowPasswordFun
    hideShowPassword() {



      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'fa fa-eye' ? 'fa fa-eye-slash' : 'fa fa-eye';
  }

  showIcon(){
    var icn = document.getElementById('icn');
    icn.style.display = 'block';
  }

  hideIcon(){
    var icn = document.getElementById('icn');
    icn.style.display = 'none';

  }
}
