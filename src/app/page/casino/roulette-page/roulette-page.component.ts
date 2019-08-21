import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import io from "socket.io-client";
import {ConfigService} from "../../../services/api/config.service";
@Component({
  selector: 'app-roulette-page',
  templateUrl: './roulette-page.component.html',
  styleUrls: ['./roulette-page.component.css']
})
export class RoulettePageComponent implements OnInit {

  @ViewChild('wheel',{static: true})
  private wheel: ElementRef;

  private socket: any;
  private isSpinning;
  private timeout;
  constructor(private config: ConfigService) {

   }

  ngOnInit() {
    this.socket = io("http://localhost:8000/roulette");
  }
  private spin(){
    this.socket.emit("spin",{});
  }
  ngAfterViewInit() {

    this.socket.on("spinning",()=>{
      this.spinWheel(20,0, 10000);
      this.isSpinning = true;
    })

    this.socket.on("wheel", (land: number)=>{
      this.isSpinning= false;
      clearTimeout(this.timeout);
      this.wheel.nativeElement.innerHTML = land;
    })
    
  }
  getRandomInt(max: number):number {
    return Math.floor(Math.random() * Math.floor(max));
  }
  spinWheel(speed: number,totalTime: number = 0, max: number): any{
    if(totalTime >= max && !this.isSpinning){
      return;
    }
    this.wheel.nativeElement.innerHTML = this.getRandomInt(36)
    speed *= 1.09
    totalTime += speed;
    console.log(this.isSpinning);
    console.log(totalTime >= max && !this.isSpinning);
    
    this.timeout = setTimeout(()=>this.spinWheel(speed,totalTime,max), speed);
  }
}
