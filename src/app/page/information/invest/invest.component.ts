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
      ]
    }];
   }

  ngOnInit(): void {
  }

}
