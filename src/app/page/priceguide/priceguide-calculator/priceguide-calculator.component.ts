import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators';

@Component({
  selector: 'app-priceguide-calculator',
  templateUrl: './priceguide-calculator.component.html',
  styleUrls: ['./priceguide-calculator.component.scss']
})
export class PriceguideCalculatorComponent implements OnInit {

  priceCalculator: FormGroup = new FormGroup({
    vehicleName:  new FormControl(''),
    mileage:  new FormControl(''),
    engine: new FormControl(''),
    turbo: new FormControl(''),
    suspension: new FormControl(''),
    transmission: new FormControl(''),
    brakes: new FormControl(''),
    neon: new FormControl(''),
    locks: new FormControl(''),
    alarm: new FormControl(''),
    antiThief: new FormControl('')
  })
  vehicles: string[] = ['One', 'Two', 'Three'];
  filteredVehicles: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
    this.filteredVehicles = this.priceCalculator.controls.vehicleName.valueChanges
      .pipe(
        startWith(''),
        map((value:string) => this.filter(value))
      );
  }
  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.vehicles.filter(option => option.toLowerCase().includes(filterValue));
  }
}
