import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 constructor(

  private apiService : ApiService,
  private route : Router

 ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      console.log(this.apiService.getUserLogin)
      if(this.apiService.getUserLogin){
        console.log("AuthGuard Sucess");
        return true;

      } else {
        console.log("AuthGuard Denied");
        this.route.navigate(['./unauthorizepage']);
        return false;
      }
     
  }
  
}
