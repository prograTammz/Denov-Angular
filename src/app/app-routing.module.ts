import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from '@angular/router';

import {HomeComponent} from './page/home/home.component';

import {VehicleBrandComponent} from './page/priceguide/vehicle-brand/vehicle-brand.component';

import {RegisterComponent} from './page/register/register.component';
import {NewsComponent} from './page/news/news.component';

import { VehicleListComponent } from './page/priceguide/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './page/priceguide/vehicle-detail/vehicle-detail.component';

import {NotfoundComponent} from './page/notfound/notfound.component';
import {SoonComponent} from './page/soon/soon.component';

 const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'soon', component: SoonComponent, data:{routeName:"Denov.Co"}},
    {path: 'trucking',  redirectTo: '/soon', data:{routeName:"Trucking"}},
    {path: 'market',    redirectTo: '/soon', data:{routeName:"Market"}},
    {path: 'office',    redirectTo: '/soon', data:{routeName:"Market"}},
    {path: 'casino',    redirectTo: '/soon', data:{routeName:"Market"}},
    {path: 'banking', loadChildren: ()=> import('./page/banking/banking-home.module').then(m=> m.BankingHomeModule)},
    { path: 'information', loadChildren: () => import('./page/information/information.module').then(m => m.InformationModule) },
    { path: 'news', loadChildren: () => import('./page/news/news.module').then(m => m.NewsModule) },
    {path: 'vehicle',children:[
      {path: '', redirectTo: 'brands', pathMatch: 'full'},
      {path:'brands', component:VehicleBrandComponent},
      {path:'list', component:VehicleListComponent},
      {path: 'detail', component: VehicleDetailComponent}
    ]},
    {path: 'register', component: RegisterComponent},
    {path: 'news', component: NewsComponent},
    
    
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