import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
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
    insurance: new FormControl('',Validators.compose([Validators.max(30), Validators.min(0)])),
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
  isCalculated: boolean;
  vehicleNewPrice: number = 0;
  vehicleUsedPrice: number = 0;
  constructor(private PriceGuideService: PriceguideService) {
    this.isCalculated = false;
   }

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

    this.error = this.findInvalidControls ? "": "Missing value";

    if(this.error){
      console.log(this.error)
    }else{
      this.isCalculated = true;
    }
    priceNew += vehicle[0].dealership_price;
    priceNew += this.performancePrice();
    priceNew += this.securityValue();

    priceUsed += vehicle[0].retail_price;
    priceUsed *= this.getUsedPercentage(this.priceCalculator.controls.insurance.value,this.priceCalculator.controls.mileage.value)/100;

    this.vehicleNewPrice = priceNew;
    this.vehicleUsedPrice = priceUsed;
  }

  private getUsedPercentage(insuranceDays: number, mileage: number):number{
    let performancePercentage = this.performancePriceValue()/37000 *10;
    let securityPercentage = this.securityValue()/36000 *10;
    let mileagePercentage = 100 - mileage/150;
    let insurancePercentage = insuranceDays/30 * 5;

    let totalPercentage = performancePercentage + securityPercentage + mileagePercentage + insurancePercentage;
    return totalPercentage;
  }
  private performancePrice(): number{
    let engine = this.priceCalculator.controls.engine.value >= 1? 8000: 0;
    let suspension = this.priceCalculator.controls.engine.value >= 1? 5000: 0;
    let transmission = this.priceCalculator.controls.engine.value >= 1? 2000: 0;
    let brakes = this.priceCalculator.controls.engine.value >= 1? 5000: 0;
    let neon = this.priceCalculator.controls.neon.value ? 7000 : 0;
    let turbo = this.priceCalculator.controls.turbo.value ? 10000 : 0;
    return engine + suspension + transmission + brakes +neon + turbo;
  }

  private performancePriceValue(): number{
    let engineValue = this.priceCalculator.controls.engine.value/4 * 8000;
    let suspensionValue = this.priceCalculator.controls.engine.value/4 * 5000;
    let transmissionValue = this.priceCalculator.controls.engine.value/4 * 2000;
    let brakesValue = this.priceCalculator.controls.engine.value/4 * 5000;
    let neon = this.priceCalculator.controls.neon.value ? 7000 : 0;
    let turbo = this.priceCalculator.controls.turbo.value ? 10000 : 0;
    return engineValue + suspensionValue + transmissionValue + brakesValue + neon + turbo;
  }

  private securityValue(): number{
    let lock = this.priceCalculator.controls.locks.value >= 2? this.priceCalculator.controls.locks.value *3000 - 3000:0;
    let alarm = this.priceCalculator.controls.alarm.value >= 2? this.priceCalculator.controls.alarm.value * 5000 -5000:0;
    let antiThief = this.priceCalculator.controls.antiThief.value >= 1? this.priceCalculator.controls.antiThief.value * 5000:0;
    return lock+alarm+ antiThief;
  }

  private findInvalidControls() {
    const invalid = [];
    const controls = this.priceCalculator.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
  }
  private scroll(el: HTMLElement) {
    const yOffset = -64;
    const y = el.getBoundingClientRect().top + window.pageYOffset +yOffset;
    window.scrollTo({behavior:"smooth",top: y});
  }
  private scrollForm(el: HTMLElement) {
    const yOffset = -95;
    const y = el.getBoundingClientRect().top + window.pageYOffset +yOffset;
    window.scrollTo({behavior:"smooth",top: y});
  }
}
