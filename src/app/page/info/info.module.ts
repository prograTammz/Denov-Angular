import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutUsRoutingModule } from './info-routing.module';



@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class InfoModule { }
