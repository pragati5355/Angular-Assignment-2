import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getUserLogin: boolean = false;

  constructor(
    private http : HttpClient,
    private route : Router

  ) { }

  getProductListAPI(){
    return this.http.get('http://localhost:3000/products');
  }

  postProductListAPI(data:any){
    return this.http.post('http://localhost:3000/products',data);
  }

  getProductDetailsAPI(data:any){
    console.log(data)
    return this.http.get('http://localhost:3000/products/'+data);
  }
  
  deleteProductAPI(id:any){
    return this.http.delete('http://localhost:3000/products/'+id);
  }

  getLoginAPI(email:any , password : any){
    return this.http.get('http://localhost:3000/login').subscribe(
      (res:any)=>{
        const user = res.find((u:any)=>{
          console.log(res);
          // console.log(this.login);
          // console.log(res[0]);
          return u.email === email && u.password === password;
        });
        if(user){
          this.getUserLogin = true;
          alert("User Login Sucessfull");
          console.log("User Login Sucessfull");
          this.route.navigate(["welcomepage"]);
        } else {
          console.log("User Not Found");
        }
      }
  );
  }
    
  

}
