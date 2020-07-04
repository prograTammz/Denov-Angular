import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss']
})
export class InvestComponent implements OnInit {

  priceList: any[];
  multi: any[];
  xAxisLabel: string = 'Day';
  yAxisLabel: string = 'Price';
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xScaleMin: number = 20;
  colorScheme = {
    domain: ['#4F4E6C']
  };
  constructor() {
    this.priceList = [{
      "name":"Stock price",
      "series":[
        {"name":"4/7", "value":3.00},
      ]
    }];
   }

  ngOnInit(): void {
  }

}
