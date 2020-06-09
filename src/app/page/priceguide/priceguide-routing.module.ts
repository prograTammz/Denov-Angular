import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceguideOverviewComponent } from './priceguide-overview/priceguide-overview.component';
import { PriceguideClassListComponent } from './priceguide-class-list/priceguide-class-list.component';
import { PriceguideDetailComponent } from './priceguide-detail/priceguide-detail.component';
import { PriceguideSearchComponent } from './priceguide-search/priceguide-search.component';


const routes: Routes = [
  {path: '', redirectTo: 'overview', pathMatch: 'full'},
  {path:'overview', component: PriceguideOverviewComponent },
  {path:'class/:class',component: PriceguideClassListComponent},
  {path:'detail/:id',component: PriceguideDetailComponent},
  {path:'search/:keyword', component: PriceguideSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceguideRoutingModule { }
