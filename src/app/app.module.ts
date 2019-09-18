import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }        from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

import { OrderService } from './service/order.service';
import { PigeonService } from './service/pigeon.service';
import { WorkflowService } from './service/workflow.service';

import { SelectPigeonComponent } from './pigeons/select-pigeon.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SubmitOrderComponent } from './submit-order/submit-order.component';
import { CompletedComponent } from './completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SelectPigeonComponent,
    OrderDetailsComponent,
    SubmitOrderComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PigeonService, WorkflowService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
