import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

import { Name } from '../../_models/Name';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  Names : Name[] = [];
  
  id = this.router.snapshot.params['id'];
  product:any;
  

  constructor(
    private route : Router,
    private apiService : ApiService,
    private router : ActivatedRoute,
  ) { }

  ngOnInit(): void {

    console.log(this.id);
    // console.log(this.productId);
    this.apiService.getProductDetailsAPI(this.id).subscribe(
      (res:any)=>{
        this.product = res;
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    );

  }

  openProductList(){
    this.route.navigate(["productlist"]);
  }

}
