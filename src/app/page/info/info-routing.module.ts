import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';



const routes: Routes = [
  {path: '', redirectTo: 'aboutus', pathMatch: 'full'},
  {path:'aboutus', component: AboutusComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AboutUsRoutingModule { }