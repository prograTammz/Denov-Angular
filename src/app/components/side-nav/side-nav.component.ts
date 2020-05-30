import { Component, OnInit,ViewChild  } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav'
import { SideNavService } from './side-nav.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class SideNavComponent implements OnInit {


  @ViewChild(MatSidenav, {static: false}) public sideNav: MatSidenav;
  
  public viewWidth: number;
  public isDesktop: boolean;
  
  constructor(private sidenavService: SideNavService) { 
    this.viewWidth = window.innerWidth;
    this.isDesktop = true;
  }


  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sideNav);
  }
  onResize(event) {
    this.viewWidth = event.target.innerWidth;
    this.isDesktop = false;
    if(this.viewWidth > 1050){
      this.isDesktop = true;
    }
  }
}
