import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:any = {
    email: '',
    password:''
  }


  getUserLogin: boolean = false;
  invalidemail: boolean = false;
  invalidpassword: boolean = false;

  constructor(
    private apiService : ApiService,
    private route : Router
  ) { }

  ngOnInit(): void {
    
  }

  signin(){

    if(this.login.email == '' || this.login.email == undefined || this.login.email == null){
      this.invalidemail = true;
    } else if(!String(this.login.email).endsWith("@gmail.com")){
      this.invalidemail = true;
    } else {
      this.invalidemail = false;
    }

    if(this.login.password == '' || this.login.password == undefined || this.login.password == null){
      this.invalidpassword = true;
    } else if(String(this.login.password).length > 8){
      this.invalidpassword = true;
    } else {
      this.invalidpassword = false;
    }

    if(this.invalidemail || this.invalidpassword){
      return;
    }

    console.log("Input fields : ",this.login);

    this.apiService.getLoginAPI(this.login.email , this.login.password);

    // this.apiService.getLoginAPI().subscribe(
    //     (res:any)=>{
    //       const user = res.find((u:any)=>{
    //         console.log(res);
    //         console.log(this.login);
    //         // console.log(res[0]);
    //         // return u.email === email && u.password === password;
    //       });
    //       if(user){
    //         this.getUserLogin = true;
    //         alert("User Login Sucessfull");
    //         console.log("User Login Sucessfull");
    //         this.route.navigate(["welcome"]);
    //       } else {
    //         console.log("User Not Found");
    //       }
    //     }
    // );
    
    this.login = {};
  }

}
