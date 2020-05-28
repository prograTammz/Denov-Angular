import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core'
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';



import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { NewsComponent } from './page/news/news.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NewsFormComponent } from './components/news-form/news-form.component';
import { VehicleBrandComponent } from './page/priceguide/vehicle-brand/vehicle-brand.component';
import { VehicleListComponent } from './page/priceguide/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './page/priceguide/vehicle-detail/vehicle-detail.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NotfoundComponent } from './page/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    NewsFormComponent,
    VehicleBrandComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    SideNavComponent,
    NotfoundComponent,
    // RoulettePageComponent,
    // LobbyPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatPaginatorModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent,NewsFormComponent],
})
export class AppModule { }
