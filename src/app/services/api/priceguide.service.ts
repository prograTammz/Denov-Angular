import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
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


@Injectable({
  providedIn: 'root'
})

export class PriceguideService {

  constructor(private apollo: Apollo) { }

  getVehicleDetail(id: number):Observable<any>{
    return this.apollo.watchQuery({
      query: GetVehicle,
      variables:{
        id: id
    }
    })
    .valueChanges
  }
}
