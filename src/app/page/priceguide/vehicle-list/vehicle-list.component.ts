import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

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
        animate('150ms', style({opacity: '1', top: '16px',left:'16px', width:'calc(100% - 32px)'}))
      ])
    ])
  ]
})
export class VehicleListComponent implements OnInit {

  brands: number[]
  isAnimated: boolean
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.brands = [1,2,3,4,5,6,7,8];
    this.isAnimated = false;
  }
  toggle(img:HTMLImageElement, event, placeHolder: HTMLElement){
    let elm: HTMLImageElement = document.getElementById('animate-image') as HTMLImageElement;
    let parentElm: HTMLElement = img.offsetParent as HTMLElement;
    elm.src = img.src;

    placeHolder.style.backgroundColor = "#ffffff";
    placeHolder.style.height = img.offsetHeight+'px';
    placeHolder.style.width = img.offsetWidth+'px';
    img.style.display = 'none';
    
    elm.style.width = parentElm.offsetWidth+'px';
    window.scrollTo({top:0, behavior: 'smooth'});
    elm.style.top = parentElm.offsetTop+"px";
    elm.style.left = parentElm.offsetWidth+"px";
    this.isAnimated = !this.isAnimated;
  }
  animationEnd(event){
    if(this.isAnimated){
      this.router.navigate(['/vehicle','detail']);
    }
    
  }
}
