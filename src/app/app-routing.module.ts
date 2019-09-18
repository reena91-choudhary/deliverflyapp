import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectPigeonComponent } from './pigeons/select-pigeon.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SubmitOrderComponent } from './submit-order/submit-order.component';
import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pigeons', component: SelectPigeonComponent },
  { path: 'orderdetails', component: OrderDetailsComponent},
  { path: 'submitorder', component: SubmitOrderComponent},
  { path: 'completed', component: CompletedComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
