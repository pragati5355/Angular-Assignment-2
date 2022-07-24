import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/authenticate/login/login.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { UnauthorizePageComponent } from '../unauthorize-page/unauthorize-page.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'productlist',
    component : ProductListComponent,
    // canActivate : [AuthGuard]
  },
  {
    path: 'addproduct',
    component : AddNewProductComponent

  },
  {
    path : 'productdetails/:id',
    component : ProductDetailsComponent
  },
  {
    path : 'login',
    component : LoginComponent

  },
  {
    path : 'unauthorizepage',
    component : UnauthorizePageComponent
  },
  {
    path : 'pagenotfound',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
