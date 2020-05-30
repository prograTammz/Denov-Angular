import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';



const routes: Routes = [
  {path: '', redirectTo: 'aboutus', pathMatch: 'full'},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus',component: ContactusComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AboutUsRoutingModule { }