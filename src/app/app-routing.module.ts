import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from '@angular/router';

import {HomeComponent} from './page/home/home.component';

import {BankingTermsComponent}          from './page/banking/banking-terms/banking-terms.component';
import {BankingWiretransferComponent}   from './page/banking/banking-wiretransfer/banking-wiretransfer.component';
import { BankingPlansComponent }        from './page/banking/banking-plans/banking-plans.component';

import {VehicleBrandComponent} from './page/priceguide/vehicle-brand/vehicle-brand.component';

import {RegisterComponent} from './page/register/register.component';
import {NewsComponent} from './page/news/news.component';
import { VehicleListComponent } from './page/priceguide/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './page/priceguide/vehicle-detail/vehicle-detail.component';
import {NotfoundComponent} from './page/notfound/notfound.component';
 const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
//     {path: 'commingSoon', component: , data:{routeName:"Denov.Co"}},
//     {path: 'trucking', component: , data:{routeName:"Trucking"}},
//     {path: 'market', component: , data:{routeName:"Market"}},
//     {path: 'dcurrency', component: , data:{routeName:"D-Currency"}},
//     {path: 'eservices', component: , data:{routeName:"E-services"}},
    {path: 'banking', loadChildren: ()=> import('./page/banking/banking-home.module').then(m=> m.BankingHomeModule)},
    
    {path: 'vehicle',children:[
      {path: '', redirectTo: 'brands', pathMatch: 'full'},
      {path:'brands', component:VehicleBrandComponent},
      {path:'list', component:VehicleListComponent},
      {path: 'detail', component: VehicleDetailComponent}
    ]},
    {path: 'register', component: RegisterComponent},
    {path: 'news', component: NewsComponent},
    // {path: 'casino',children:[
    //   {path: '', redirectTo: 'lobby', pathMatch: 'full'},
    //   {path: 'lobby', component: LobbyPageComponent},
    //   {path: 'roulette', component: RoulettePageComponent}
    // ]},
//     {path: '', component: , data:{routeName:"Denov.Co"}},
     {path: '**', component:NotfoundComponent, data:{routeName:"Error"}}
 ]
@NgModule({
    declarations: [],
    imports: [
      CommonModule,RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule{}