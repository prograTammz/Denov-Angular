import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceguideOverviewComponent } from './priceguide-overview/priceguide-overview.component';


const routes: Routes = [
  {path: '', redirectTo: 'overview', pathMatch: 'full'},
  {path:'overview', component: PriceguideOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceguideRoutingModule { }
