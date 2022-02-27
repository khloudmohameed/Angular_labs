import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path :"", component:ProductsComponent},

  {path:"login" , component: LoginComponent },
  {path:"register" , component: RegisterComponent },
  {path:"**",component:NotFoundComponent},
  {path:"productdetails/:id", component:ProductDetailesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
