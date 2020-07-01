import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PriceguideService} from '../../../services/api/priceguide.service'

@Component({
  selector: 'app-priceguide-detail',
  templateUrl: './priceguide-detail.component.html',
  styleUrls: ['./priceguide-detail.component.scss']
})
export class PriceguideDetailComponent implements OnInit {
  vehicle: any;
  loading = true;
  error: any;
  id: number;
  upgrades: any[];
  maintance: any[];
  displayedColumns: string[] = ['mileage','cost','accumulativeCost'];
  constructor(private PriceGuideService: PriceguideService,private activatedroute:ActivatedRoute) { 
    this.upgrades=this.PriceGuideService.getUpgrades();
  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params=>{
      this.id = parseInt(params.get('id'));
    })
    this.PriceGuideService.getVehicleDetail(this.id)
    .subscribe((result:any)=>{
      this.vehicle = result.data.getVehicle;
      this.createTableDate();
      this.loading = result.loading;
      this.error = result.error;
    })
  }
  createTableDate(){
    this.maintance=[
      {mileage:"1500 Mile",   cost: (this.vehicle.retail_price/30 *1), accumulativeCost:(this.vehicle.retail_price/30 * 1)},
      {mileage:"3000 Mile",   cost: (this.vehicle.retail_price/30 *2), accumulativeCost:(this.vehicle.retail_price/30 * 3)},
      {mileage:"4500 Mile",   cost: (this.vehicle.retail_price/30 *3), accumulativeCost:(this.vehicle.retail_price/30 * 6)},
      {mileage:"6000 Mile",  cost: (this.vehicle.retail_price/30 *4), accumulativeCost:(this.vehicle.retail_price/30 * 10)},
      {mileage:"7500 Mile",  cost: (this.vehicle.retail_price/30 *5), accumulativeCost:(this.vehicle.retail_price/30 * 15)},
      {mileage:"10000 Mile", cost: (this.vehicle.retail_price/30 *6), accumulativeCost:(this.vehicle.retail_price/30 * 21)},
    ]
  }
}
