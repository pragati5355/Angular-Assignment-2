import { Component, OnInit } from '@angular/core';

import { Name } from '../../_models/Name';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  Names : Name[] = [];

  constructor(
    private apiService : ApiService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.apiService.getProductListAPI().subscribe(
      (res:any)=>{
        console.log(res);
        this.Names = res;
      },
      (err:any)=>{
        console.log(err);
      }
    );
  }

  backtowelcome(){
    this.route.navigate(["welcomepage"]);
  }

  openAddnewproduct(){
    this.route.navigate(["addproduct"]);
  }

  openProductdetails(data:any)
  {
    this.route.navigate(["productdetails/"+data]);
  }

  deleteDate(data:any){
    if(confirm("Are you sure ..? You want to delete the product")){
      this.apiService.deleteProductAPI(data).subscribe(
        (res:any)=>{
          alert("Product Deleted Sucessfully !");
          this.ngOnInit();
        },
        (err:any)=>{
          console.log(err)
        }

      )
    }

  }

}
