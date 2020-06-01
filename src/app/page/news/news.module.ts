import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';

import { NewsFormComponent } from '../../components/news-form/news-form.component';
import { NewsComponent } from './news.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [NewsComponent,NewsFormComponent ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class NewsModule { }
