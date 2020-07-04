import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators';
import { PriceguideService } from 'src/app/services/api/priceguide.service';

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
  vehicles:any[];
  loading = true;
  error: any;
  filteredVehicles: Observable<string[]>;
  constructor(private PriceGuideService: PriceguideService) { }

  ngOnInit(): void {
    this.getVehicleList();
    
    
  }
  private filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.vehicles.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  private getVehicleList(){
    this.PriceGuideService.getVehicleList().subscribe((result:any)=>{
      this.vehicles = result.data.listVehicles;
      this.error = result.error;
      this.filteredVehicles = this.priceCalculator.controls.vehicleName.valueChanges
      .pipe(
        startWith(''),
        map((value:string) => this.filter(value))
      );
      this.loading = result.loading;
    })
  }
  private calculate(){
    let vehicle:any = this.vehicles.filter(option => option.name.toLowerCase().includes(this.priceCalculator.controls.vehicleName.value));
    let priceUsed = 0;
    let priceNew = 0;
    priceNew += vehicle[0].dealership_price;
    priceUsed += vehicle[0].retail_price * (this.priceCalculator.controls.mileage.value/150)/100;
    let engineValue = this.priceCalculator.controls.engine.value/4 * 8000;
    let suspensionValue = this.priceCalculator.controls.engine.value/4 * 5000;
    let transmissionValue = this.priceCalculator.controls.engine.value/4 * 2000;
    let brakesValue = this.priceCalculator.controls.engine.value/4 * 5000;

    let engine = this.priceCalculator.controls.engine.value >= 1? 8000: 0;
    let suspension = this.priceCalculator.controls.engine.value >= 1? 5000: 0;
    let transmission = this.priceCalculator.controls.engine.value >= 1? 2000: 0;
    let brakes = this.priceCalculator.controls.engine.value >= 1? 5000: 0;

    let lock = this.priceCalculator.controls.locks.value *3000 - 3000;
    let alarm = this.priceCalculator.controls.alarm.value *5000 - 5000;
    let antiThief = this.priceCalculator.controls.antiThief.value *5000;
    
    let neon = this.priceCalculator.controls.neon.value ? 7000 : 0;
    let turbo = this.priceCalculator.controls.turbo.value ? 10000 : 0;
    console.log(engineValue + suspensionValue + transmissionValue + brakesValue);
    console.log(engine + suspension + transmission + brakes);
    console.log(lock + alarm + antiThief);
    console.log(neon + turbo);

    console.log(priceUsed);
  }
}
