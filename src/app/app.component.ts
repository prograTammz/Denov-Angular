import { Component } from '@angular/core';
import {FadeAnimation} from './route-animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [FadeAnimation]
})
export class AppComponent {
  title = 'Denov-Angular';
}

