import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';

import { PriceguideRoutingModule } from './priceguide-routing.module';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import { PriceguideOverviewComponent } from './priceguide-overview/priceguide-overview.component';
import { PriceguideClassListComponent } from './priceguide-class-list/priceguide-class-list.component';
import { PriceguideDetailComponent } from './priceguide-detail/priceguide-detail.component';
import { PriceguideSearchComponent } from './priceguide-search/priceguide-search.component';
@NgModule({
  declarations: [PriceguideOverviewComponent, PriceguideClassListComponent, PriceguideDetailComponent, PriceguideSearchComponent],
  imports: [
    CommonModule,
    PriceguideRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class PriceguideModule { }
