import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';



import {HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { HomeComponent } from './page/home/home.component';
import { BankingHomeComponent } from './page/banking/banking-home/banking-home.component';
import { BankingTermsComponent } from './page/banking/banking-terms/banking-terms.component';
import { BankingFeesComponent } from './page/banking/banking-fees/banking-fees.component';
import { BankingPlansComponent } from './page/banking/banking-plans/banking-plans.component';
import { BankingAccountComponent } from './page/banking/banking-account/banking-account.component';
import { BankingLoanComponent } from './page/banking/banking-loan/banking-loan.component';
import { BankingWiretransferComponent } from './page/banking/banking-wiretransfer/banking-wiretransfer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { NewsComponent } from './page/news/news.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InstallComponent } from './components/install/install.component';
import { NewsFormComponent } from './components/news-form/news-form.component';
import { VehicleBrandComponent } from './page/priceguide/vehicle-brand/vehicle-brand.component';

declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y"
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    BankingHomeComponent,
    BankingTermsComponent,
    BankingFeesComponent,
    BankingPlansComponent,
    BankingAccountComponent,
    BankingLoanComponent,
    BankingWiretransferComponent,
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    InstallComponent,
    NewsFormComponent,
    VehicleBrandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatRippleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig ,
  }],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent,InstallComponent,NewsFormComponent],
})
export class AppModule { }
