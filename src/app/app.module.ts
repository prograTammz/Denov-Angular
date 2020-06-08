import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//angular modules to be moved
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';


//angular material modules
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core'

//angular material modules to be moved to other modules
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';

//appshell modules
import { HomeComponent } from './page/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
//placeholder pages
import { NotfoundComponent } from './page/notfound/notfound.component';
import { SoonComponent } from './page/soon/soon.component';

//to be moved to userModule
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './page/register/register.component';

//to be moved to news Module


//to be moved to priceGuide Module
import { VehicleListComponent } from './page/priceguide/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './page/priceguide/vehicle-detail/vehicle-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    SideNavComponent,
    NotfoundComponent,
    SoonComponent,
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
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent],
})
export class AppModule { }
