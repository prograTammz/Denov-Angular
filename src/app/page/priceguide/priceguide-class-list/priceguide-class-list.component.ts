import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const VehicleClassList = gql`
  query($class: String!){
    getClass(vehicle_class:$class){
      name
      img_url
      id
      retail_price
      dealership
    }
  }
`;
@Component({
  selector: 'app-priceguide-class-list',
  templateUrl: './priceguide-class-list.component.html',
  styleUrls: ['./priceguide-class-list.component.scss']
})



export class PriceguideClassListComponent implements OnInit {

  vehicles: any[];
  loading = true;
  error: any;
  class:string;
  
  constructor(private apollo: Apollo,private activatedroute:ActivatedRoute) {
    this.vehicles = [];
    this.class="suv";
   }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(params=>{
      this.class = params.get('class');
    })
    this.apollo.watchQuery({
      query: VehicleClassList,
      variables:{
        class: this.class
    }
    })
    .valueChanges.subscribe((result:any)=>{
      this.vehicles = result.data && result.data.getClass;
      this.loading = result.loading;
      console.log(this.vehicles);
      this.error = result.error;
    })
  }

}
