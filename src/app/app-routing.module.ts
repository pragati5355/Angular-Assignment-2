import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeScreenComponent } from '../app/welcome-screen/welcome-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/login',
    pathMatch : 'full'

  },
  {
    path : 'welcomepage',
    component : WelcomeScreenComponent

  },
  {
    path : '',
    loadChildren : () =>import('./product-module/product-module.module').then(m => m.ProductModuleModule)
  },
  {
    path : 'login',
    loadChildren : () => import('./auth/authenticate/authenticate.module').then(m => m.AuthenticateModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
