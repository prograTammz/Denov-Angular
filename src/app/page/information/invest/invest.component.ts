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
        {"name":"1/6", "value":21.20},
        {"name":"2/6", "value":23.12},
        {"name":"3/6", "value":24.33},
        {"name":"4/6", "value":24.43},
        {"name":"5/6", "value":27.22},
        {"name":"6/6", "value":29.72},
        {"name":"7/6", "value":31.20},
        {"name":"8/6", "value":31.34},
        {"name":"9/6", "value":34.68},
        {"name":"10/6", "value":38.56},
        {"name":"11/6", "value":39.32},
        {"name":"12/6", "value":32.47},
        {"name":"13/6", "value":30.77},
        {"name":"14/6", "value":34.82},
        {"name":"15/6", "value":37.41},
        {"name":"16/6", "value":39.12},
        {"name":"17/6", "value":40.03},
        {"name":"18/6", "value":41.34},
        {"name":"19/6", "value":42.09},
        {"name":"20/6", "value":44.62},
        {"name":"21/6", "value":47.21},
        {"name":"22/6", "value":50.57},
        {"name":"23/6", "value":52.01},
        {"name":"24/6", "value":56.12},
        {"name":"25/6", "value":58.78},
        {"name":"26/6", "value":56.22},
        {"name":"27/6", "value":59.32},
        {"name":"28/6", "value":60.11},
        {"name":"29/6", "value":60.58},
        {"name":"30/6", "value":59.77},
        {"name":"1/7", "value":61.33},
      ]
    }];
   }

  ngOnInit(): void {
  }

}
