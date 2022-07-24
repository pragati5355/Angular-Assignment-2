import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    AddNewProductComponent
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class ProductModuleModule { }
