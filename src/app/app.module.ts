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
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core'

//angular material modules to be moved to other modules
import {MatInputModule} from '@angular/material/input';

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
import { VehicleDetailComponent } from './page/priceguide/vehicle-detail/vehicle-detail.component';
import { GraphQLModule } from './graphql.module';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
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
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent],
})
export class AppModule { }
