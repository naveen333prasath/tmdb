import { Component, OnInit } from "@angular/core";

import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from "../shared/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  userDet: any;
  Det1: any;
  returnUrl: string;

  constructor(
    private user: UserService,

    private fb: FormBuilder,
    private router: Router
  ) {}

  LoginForm = this.fb.group({
    name: [""],
    password: [""]
  });
  onSubmit(formData) {
    this.user.login(formData).subscribe(
      res => {
        this.user.setToken(res["token"]);
        this.router.navigate(["movies"]);
      },
      err => {
        console.log(err);
      }
    );

    // this.userDet=this.storeService.getPerson();
    // let flag = false;
    // for( var det in this.userDet)
    // {
    //   let regUname = this.userDet[det].userName;
    //   let regPass = this.userDet[det].password;

    //   if(formData.userName == regUname && formData.password == regPass) {
    //     flag=true;
    //     this.Det1=det;
    //     break;
    //   }

    // }
    // if(flag){
    //   alert("Login Successful");
    // }
    // else {
    //   alert("Invalid Uname or Password");
    // }
    // //this.router.navigate(['seller']);
    // switch(this.userDet[this.Det1].roleName){
    //   case 'Admin':
    //       this.router.navigate(['admin']);
    //     break;

    //     case 'Buyer':
    //         this.router.navigate(['buyer']);
    //       break;

    //       case 'Seller':
    //           this.router.navigate(['seller']);
    //         break;

    // }
    //this.authservice.canActivate(this.userDet[this.Det1].roleName);
    //   console.log(this.userDet[this.Det1].roleName);
    //    if(this.userDet[this.Det1].roleName=='Admin'){
    //      this.router.navigateByUrl('/admin');
    //    }
    //    else if(this.userDet[this.Det1].roleName=='Buyer'){
    //      this.router.navigateByUrl('/buyer');
    //    }
    //    else{
    //      this.router.navigateByUrl('/seller');

    //    }
    // }

    // CurrentRole(){
    //   return this.userDet[this.Det1].roleName;

    // }
  }
}
