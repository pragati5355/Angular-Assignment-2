import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  categoryNames = ['Mobile','laptop','TV','Refrigerator','Washing-Machine','Camera'];
  maxDate:any = new Date();


  product:any = {
    product_name:"",
    category: "",
    price: "",
    stock_units: "",
    serial_no: "",
    release_date: "",
    description: "",
  };

  invalidproduct_name : Boolean = false;
  invalidprice : Boolean = false;
  invalidstock_units : Boolean = false;
  invalidserial_no : Boolean = false;
  invalidrelease_date : Boolean = false;
  invaliddescription : Boolean = false;


  constructor(
    private route : Router,
    private apiService : ApiService
  ) { }

  ngOnInit(): void {

    
  }

  backProductList(){
    this.route.navigate(["productlist"]);
  }

  addNewProduct(){

    if(this.product.product_name == '' || this.product.product_name == undefined || this.product.product_name == null){
      this.invalidproduct_name = true;
    } else if(String(this.product.product_name).length > 30){
      this.invalidproduct_name = true;
    } else {
      this.invalidproduct_name = false;
    }

    if(this.product.price == '' || this.product.price == undefined || this.product.price == null){
      this.invalidprice = true;
    } else {
      this.invalidprice = false;
    }

    if(this.product.stock_units == '' || this.product.stock_units == undefined || this.product.stock_units == null){
      this.invalidstock_units = true;
    } else {
      this.invalidstock_units = false;
    }

    if(this.product.serial_no == '' || this.product.serial_no == undefined || this.product.serial_no == null){
      this.invalidserial_no = true;
    } else if(String(this.product.serial_no).length > 30){
      this.invalidserial_no = true;
    } else {
      this.invalidserial_no = false;
    }


    if(this.product.release_date == '' || this.product.release_date == undefined || this.product.release_date == null){
      this.invalidrelease_date = true;
    }else{
      this.invalidrelease_date = false;
    }

    if(this.product.description == '' || this.product.description == undefined || this.product.description == null){
      this.invaliddescription = true;
    } else if(String(this.product.description).length > 100){
      this.invaliddescription = true;
    } else {
      this.invaliddescription = false;
    }

    if(this.invalidproduct_name || this.invalidrelease_date || this.invaliddescription || this.invalidprice || this.invalidserial_no || this.invalidstock_units){
      return;
    }

    this.apiService.postProductListAPI(this.product).subscribe(
      (res:any)=>{
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    );

    console.log(JSON.stringify(this.product));
    this.route.navigate(["productlist"]);
    this.product = {};

  }

}
