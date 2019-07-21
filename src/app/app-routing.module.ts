import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from '@angular/router';

import {HomeComponent} from '../app/page/home/home.component';

import {BankingHomeComponent}           from '../app/page/banking/banking-home/banking-home.component';
import {BankingTermsComponent}          from '../app/page/banking/banking-terms/banking-terms.component';
import {BankingWiretransferComponent}   from '../app/page/banking/banking-wiretransfer/banking-wiretransfer.component';

 const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
     {path: 'home', component: HomeComponent},
//     {path: 'commingSoon', component: , data:{routeName:"Denov.Co"}},
//     {path: 'trucking', component: , data:{routeName:"Trucking"}},
//     {path: 'market', component: , data:{routeName:"Market"}},
//     {path: 'dcurrency', component: , data:{routeName:"D-Currency"}},
//     {path: 'eservices', component: , data:{routeName:"E-services"}},
    {path: 'banking', children:[
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path:'overview', component:BankingHomeComponent},
      {path:'terms-conditions', component:BankingTermsComponent},
      {path:'wire-transfer',component:BankingWiretransferComponent}
    ]},
//     {path: '', component: , data:{routeName:"Denov.Co"}},
//     {path: '**', component:, data:{routeName:"Erroooor"}}
 ]
@NgModule({
    declarations: [],
    imports: [
      CommonModule,RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule{}