import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  hour:number;
  greet:string ="";

  constructor(
    private router: Router
  ) { 
    this.hour = new Date().getHours();
  }

  ngOnInit(): void {
  }

  greetFun(){

    if(this.hour<12)
    {
      this.greet =  "Good Morning";
    } else if(this.hour >= 12 && this.hour <= 17){
      this.greet = "Good Afternoon";
    } else if(this.hour >= 17 && this.hour >= 20){
      this.greet =  "Good Evening";
    } else {
      this.greet = "Good Night";
    }

    return this.greet;

  }

  openProductList(){
    this.router.navigate(["productlist"]);
  }

}
