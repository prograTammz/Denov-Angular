import { Component, OnInit,ViewChild  } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav'
import { SideNavService } from './side-nav.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {


  @ViewChild(MatSidenav, {static: false}) public sideNav: MatSidenav;
  constructor(private sidenavService: SideNavService) { }


  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sideNav);
  }

}
