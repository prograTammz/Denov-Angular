import { Component, OnInit } from '@angular/core';
import {FadeAnimation} from './route-animation';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [FadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'Denov.co';
  constructor(public router: Router){

  }
  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
}

