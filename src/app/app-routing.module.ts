import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex89Component } from './ex89/ex89.component';
import { Ex90Component } from './ex90/ex90.component';
import { Ex86Component } from './ex86/ex86.component';
import { Ex87Component } from './ex87/ex87.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { ServiceProductHttpHandleErrorComponent } from './service-product-http-handle-error/service-product-http-handle-error.component';
import { Ex92Component } from './ex92/ex92.component';
import { Ex93Component } from './ex93/ex93.component';
const routes: Routes = [
  {path: 'ex89', component: Ex89Component},
  {path: 'ex90', component: Ex90Component},
  {path:'ex86',component:Ex86Component},
  {path:'ex87',component: Ex87Component},
  {path:'ex92',component:Ex92Component},
  {path:'service-product-image-event',component:ServiceProductImageEventComponent},
{path:'service-product-image-event/:id',component:ServiceProductImageEventDetailComponent},
{path:'service-product-http-handle-error',component:ServiceProductHttpHandleErrorComponent},
{ path:'ex93',component:Ex93Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
