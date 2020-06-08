import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceguideRoutingModule } from './priceguide-routing.module';

import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { PriceguideOverviewComponent } from './priceguide-overview/priceguide-overview.component';
@NgModule({
  declarations: [PriceguideOverviewComponent],
  imports: [
    CommonModule,
    PriceguideRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class PriceguideModule { }
