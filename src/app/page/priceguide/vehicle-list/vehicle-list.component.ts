import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
  animations: [
    trigger('photoState',[
      state('enlarge', style({
        display:'block',
        opacity: '1',
         top: '16px',
         left:'16px',
          width:'calc(100% - 32px)'
      })),
      state('normal',style({
        display: 'none'
      })),
      transition('normal=>enlarge',[
        style({display: 'block', opacity: '0'}),
        animate('300ms', style({opacity: '1', top: '16px',left:'16px', width:'calc(100% - 32px)'}))
      ])
    ])
  ]
})
export class VehicleListComponent implements OnInit {

  brands: number[]
  isAnimated: boolean
  constructor() { }

  ngOnInit() {
    this.brands = [1,2,3,4,5,6,7,8];
    this.isAnimated = false;
  }
  toggle(img, event){
    console.log(event);
    let elm: any = document.getElementById('animate-image');
    elm.src = img;
    console.log(event.clientX);
    elm.style.top = event.clientY+"px";
    elm.style.left = event.clientX+"px";
    console.log(document.getElementById('animate-image'));
    console.log(elm);
    this.isAnimated = !this.isAnimated;
  }
  animationEnd(){
    console.log('HEY')
  }
}
