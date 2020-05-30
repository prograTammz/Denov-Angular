import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutUsRoutingModule } from './info-routing.module';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  declarations: [AboutusComponent, ContactusComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class InfoModule { }
