import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { CareerComponent } from './career/career.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { InvestComponent } from './invest/invest.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [CareerComponent, InvestComponent, AboutusComponent, ContactusComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    NgxChartsModule
  ]
})
export class InformationModule { }
