import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { InvestComponent } from './invest/invest.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path: '', redirectTo: 'contactus', pathMatch: 'full'},
  { path: 'career', component: CareerComponent },
  { path:'invest', component:InvestComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
