import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priceguide-home',
  templateUrl: './priceguide-home.component.html',
  styleUrls: ['./priceguide-home.component.scss']
})
export class PriceguideHomeComponent implements OnInit {

  vehicleClassList = [];
  constructor() { 
    this.vehicleClassList=[,,,,,,,];
  }

  ngOnInit(): void {
  }

}
