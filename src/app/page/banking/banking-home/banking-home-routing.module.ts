import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BankingHomeComponent} from './banking-home-component/banking-home.component';

const routes: Routes = [
    {
      path: '',
      component: BankingHomeComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BankRoutingModule { }