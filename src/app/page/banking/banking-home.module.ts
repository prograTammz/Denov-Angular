import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {BankingHomeComponent} from './banking-home/banking-home.component';
import {BankingTermsComponent}          from './banking-terms/banking-terms.component';
import {BankingWiretransferComponent}   from './banking-wiretransfer/banking-wiretransfer.component';
import { BankingPlansComponent }        from './banking-plans/banking-plans.component';
import {BankRoutingModule} from './banking-home-routing.module';

import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { BankingFeesComponent } from './banking-fees/banking-fees.component';

@NgModule({
  declarations: [
    BankingHomeComponent,
    BankingTermsComponent,
    BankingWiretransferComponent,
    BankingPlansComponent,
    BankingFeesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    BankRoutingModule,
    MatListModule
  ]
})
export class BankingHomeModule { }
