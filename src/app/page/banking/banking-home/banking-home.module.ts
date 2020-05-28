import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BankingHomeComponent} from './banking-home-component/banking-home.component'

import {BankRoutingModule} from './banking-home-routing.module';

import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    BankingHomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    BankRoutingModule
  ]
})
export class BankingHomeModule { }
