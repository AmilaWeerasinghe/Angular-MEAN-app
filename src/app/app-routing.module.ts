import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OktaCallbackComponent, OktaAuthGuard } from "@okta/okta-angular";

import { ProductsComponent } from "./products/products.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent,
    canActivate: [OktaAuthGuard]
  },
  { path: "implicit/callback", component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}