import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { CareerComponent } from './career/career.component';


import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { InvestComponent } from './invest/invest.component';

@NgModule({
  declarations: [CareerComponent, InvestComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class InformationModule { }
