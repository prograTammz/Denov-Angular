import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const GetVehicle = gql`
  query($id: Float!){
    getVehicle(id:$id){
      id
      name
      img_url
      retail_price
      registeration_cost
      dealership_price
      insurance_price
      minimum_price
      maximum_price
      inventory
      passenger_capacity
      drive_train
      vehicle_class
      dealership
    }
  }
`;
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
  constructor(private apollo: Apollo,private activatedroute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params=>{
      this.id = parseInt(params.get('id'));
    })
    this.apollo.watchQuery({
      query: GetVehicle,
      variables:{
        id: this.id
    }
    })
    .valueChanges.subscribe((result:any)=>{
      this.vehicle = result.data.getVehicle;
      this.loading = result.loading;
      this.error = result.error;
    })
  }

}
