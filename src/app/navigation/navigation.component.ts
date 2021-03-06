import { Component, OnInit, HostListener} from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

import {Location} from '@angular/common';
import { Event,NavigationCancel,NavigationEnd,NavigationError,NavigationStart,Router,ActivatedRoute,RouterEvent } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';

import { Observable, fromEventPattern } from 'rxjs';

import {AuthService} from '../services/api/auth.service';
import {LoginDialogService} from '../services/dialogs/login-dialog.service';

import{SideNavComponent} from '../components/side-nav/side-nav.component';
import {SideNavService} from '../components/side-nav/side-nav.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavigationComponent implements OnInit {

  
  private navigationStart: Observable<RouterEvent>;
  public title: string;
  public isAuth;
  public isInstalled: boolean;
  public viewWidth: number;
  public isDesktop: boolean;
  public isLoading: boolean;
  constructor(private sideNav:SideNavService, private auth: AuthService,private loginDialog: LoginDialogService,private sanitizer: DomSanitizer,private matIconRegistry: MatIconRegistry,public router: Router,private location: Location, private activatedRoute: ActivatedRoute) {
    this.matIconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/menu.svg'));
    this.matIconRegistry.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/close.svg'));
    this.matIconRegistry.addSvgIcon('burger-menu',sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/burger-icon.svg'));
    this.isAuth = false;
    this.viewWidth = window.innerWidth;
    this.isDesktop = false;
    this.isLoading = false;

    
  }

  ngOnInit() {
    
    this.checkSideNav();
    this.auth.isAuth.subscribe(auth=>{
      this.isAuth = auth;
    });
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case (event instanceof NavigationStart && !this.isDesktop): {
          this.sideNav.close();
          this.isLoading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.isLoading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  onResize(event) {
    this.viewWidth = event.target.innerWidth;
    this.isDesktop = false;
    this.sideNav.close();
    this.checkSideNav();
  }

  checkSideNav(){
    if(this.viewWidth > 1050){
      this.isDesktop = true;
      this.sideNav.open();
    }
  }
  goBack():void{
    this.location.back();
  }
  goHome():void{
    this.router.navigate(['home']);
  }
  openLoginDialog(){
    this.loginDialog.openModal();
  }
  logout(){
    this.auth.logout();
  }
  sideNavigationToggle(){
    this.sideNav.toggle();
  }
}
