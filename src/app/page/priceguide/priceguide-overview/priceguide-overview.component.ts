import { Component, OnInit } from '@angular/core';
import {VehicleClass} from '../vehicleclass';
@Component({
  selector: 'app-priceguide-overview',
  templateUrl: './priceguide-overview.component.html',
  styleUrls: ['./priceguide-overview.component.scss']
})
export class PriceguideOverviewComponent implements OnInit {

  vehicleClassList:VehicleClass[];
  constructor() { 
    this.vehicleClassList=[
      {class:"SUV",count:25, imgUrl:"rebla-gts",imgAlt:"Rebla SUV vehicle"},
      {class:"Motorcycle",count:35, imgUrl:"akuma",imgAlt:"Akuma motorcycle"},
      {class:"Sedan",count:42, imgUrl:"taranis",imgAlt:"Taranis Sedan vehicle"},
      {class:"Sport",count:43, imgUrl:"zr-380-mod",imgAlt:"Zr-380-mod Coupe vehicle"},
      {class:"Helicopter",count:7, imgUrl:"maverick",imgAlt:"maverick helicopter"},
      {class:"Boat",count:7, imgUrl:"marquis",imgAlt:"Marquis wodden boat"},
      {class:"Freight",count:10, imgUrl:"bus",imgAlt:"A Red Bus"},
      {class:"Compact",count:13, imgUrl:"blista",imgAlt:"Blista compact vehicle"},
      {class:"Muscle",count:39, imgUrl:"dominator-classic",imgAlt:"Dominator Classic Muscle car"},
      {class:"Pick-up",count:11, imgUrl:"sadler",imgAlt:"Sadler vehicle"},
      {class:"Taxi",count:2, imgUrl:"rebla-gts",imgAlt:"Rebla SUV vehicle"},
      {class:"Aircraft",count:8, imgUrl:"velum",imgAlt:"Velum aircraft vehicle"},
      {class:"Industrial",count:20, imgUrl:"mule",imgAlt:"Mule truck"},
      {class:"Bike",count:6, imgUrl:"bmx",imgAlt:"BMX bike"},
      {class:"Van",count:14, imgUrl:"youga",imgAlt:"Youga Van"},
      {class:"Offroad",count:18, imgUrl:"mesa",imgAlt:"Mesa offroad vehicle"},
      {class:"Coupe",count:18, imgUrl:"zion-cabrio",imgAlt:"Zion Cabrio coupe vehicle"},
    ]
  }

  ngOnInit(): void {
  }

}
