import { Component, OnInit,ViewChild } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

import {Location} from '@angular/common';
import { NavigationEnd,Router,ActivatedRoute,RouterEvent } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild(MatSidenav, {static: false}) private sideNav: MatSidenav;
  private navigationEnd: Observable<RouterEvent>;
  public title: string;

  constructor(private sanitizer: DomSanitizer,private matIconRegistry: MatIconRegistry,public router: Router,private location: Location, private activatedRoute: ActivatedRoute) {
    this.matIconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/menu.svg'));
    this.matIconRegistry.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/close.svg'));
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.sideNav.close();
      }
    });
  }

  goBack():void{
    this.location.back();
  }
}
