import { Component, OnInit } from '@angular/core';
import {FadeAnimation} from './route-animation';
import { Router, NavigationEnd } from '@angular/router';
import { UpdateService } from './services/update.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [FadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'Denov.co';
  constructor(public router: Router, private updateService: UpdateService){

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

