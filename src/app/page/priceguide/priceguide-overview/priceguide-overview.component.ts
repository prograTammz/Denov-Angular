import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priceguide-overview',
  templateUrl: './priceguide-overview.component.html',
  styleUrls: ['./priceguide-overview.component.scss']
})
export class PriceguideOverviewComponent implements OnInit {

  vehicleClassList = [];
  constructor() { 
    this.vehicleClassList=[,,,,,,,];
  }

  ngOnInit(): void {
  }

}
