import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceguideRoutingModule } from './priceguide-routing.module';

import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';

import { PriceguideOverviewComponent } from './priceguide-overview/priceguide-overview.component';
import { PriceguideClassListComponent } from './priceguide-class-list/priceguide-class-list.component';
import { PriceguideDetailComponent } from './priceguide-detail/priceguide-detail.component';
@NgModule({
  declarations: [PriceguideOverviewComponent, PriceguideClassListComponent, PriceguideDetailComponent],
  imports: [
    CommonModule,
    PriceguideRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ]
})
export class PriceguideModule { }
