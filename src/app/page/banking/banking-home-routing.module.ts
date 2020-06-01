import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BankingHomeComponent} from './banking-home/banking-home.component';
import {BankingTermsComponent}          from './banking-terms/banking-terms.component';
import {BankingWiretransferComponent}   from './banking-wiretransfer/banking-wiretransfer.component';
import { BankingPlansComponent }        from './banking-plans/banking-plans.component';
import { BankingFeesComponent } from './banking-fees/banking-fees.component';

const routes: Routes = [
  {path: '', redirectTo: 'overview', pathMatch: 'full'},
  {path:'overview', component: BankingHomeComponent},
  {path:'terms-conditions', component:BankingTermsComponent},
  {path:'wire-transfer',component:BankingWiretransferComponent},
  {path: 'plans',component:BankingPlansComponent},
  {path: 'fees', component:BankingFeesComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BankRoutingModule { }