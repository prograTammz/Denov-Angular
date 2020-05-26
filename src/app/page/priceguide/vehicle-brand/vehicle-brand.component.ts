import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-brand',
  templateUrl: './vehicle-brand.component.html',
  styleUrls: ['./vehicle-brand.component.scss']
})
export class VehicleBrandComponent implements OnInit {

  brands: string[]
  constructor() { }

  ngOnInit() {
    this.brands = [,,,,,,,]
  }

}
