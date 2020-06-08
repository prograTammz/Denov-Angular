import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceguideRoutingModule } from './priceguide-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PriceguideRoutingModule
  ]
})
export class PriceguideModule { }
