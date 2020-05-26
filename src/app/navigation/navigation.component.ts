import { Component, OnInit,ViewChild } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

import {Location} from '@angular/common';
import { NavigationEnd,Router,ActivatedRoute,RouterEvent } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav'
import { Observable, fromEventPattern } from 'rxjs';

import {AuthService} from '../services/api/auth.service';
import {LoginDialogService} from '../services/dialogs/login-dialog.service';
import {InstallDialogService} from '../services/dialogs/install-dialog.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild(MatSidenav, {static: false}) private sideNav: MatSidenav;
  private navigationEnd: Observable<RouterEvent>;
  public title: string;
  public isAuth;
  public isInstalled: boolean;
  constructor(private installDialog: InstallDialogService,private auth: AuthService,private loginDialog: LoginDialogService,private sanitizer: DomSanitizer,private matIconRegistry: MatIconRegistry,public router: Router,private location: Location, private activatedRoute: ActivatedRoute) {
    this.matIconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/menu.svg'));
    this.matIconRegistry.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/close.svg'));
    this.matIconRegistry.addSvgIcon('burger-menu',sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/burger-icon.svg'));
    this.isAuth = false;
    this.isInstalled = false;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.sideNav.close();
      }
    });
    this.auth.isAuth.subscribe(auth=>{
      this.isAuth = auth;
    });
    if (window.matchMedia('(display-mode: standalone)').matches) {  
      this.isInstalled = true;
    }
  }

  goBack():void{
    this.location.back();
  }
  openLoginDialog(){
    this.loginDialog.openModal();
  }
  logout(){
    this.auth.logout();
  }
  openInstallDialog(){
    this.installDialog.openModal();
  }
}
