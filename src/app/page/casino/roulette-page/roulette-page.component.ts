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
  constructor(private config: ConfigService) {

   }

  ngOnInit() {
    this.socket = io("http://localhost:8000/roulette");
  }
  private spin(){
    console.log("a7a");
    this.socket.emit("spin",{});
  }
  ngAfterViewInit() {
    this.socket.on("wheel", (land: number)=>{
      this.wheel.nativeElement.innerHTML = land;
    })
  }
}
