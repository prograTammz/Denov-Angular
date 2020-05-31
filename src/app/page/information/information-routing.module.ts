import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component';


const routes: Routes = [
  //{path: '', redirectTo: 'aboutus', pathMatch: 'full'},
  { path: 'career', component: CareerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
