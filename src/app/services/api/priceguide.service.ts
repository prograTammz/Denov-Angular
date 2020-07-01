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
const SearchQuery = gql`
  query($keyword: String!){
    searchName(name:$keyword){
      name
      img_url
      id
      retail_price
      dealership
    }
  }
`;
const upgrades = [
  {name:"Lock 2nd Generation",price:3000},
  {name:"Lock 3rd Generation", price:6000},
  {name:"Alarm 2nd Generation", price:5000},
  {name:"Alarm 3rd Generation", price:10000},
  {name:"Anti-thief 1st Generation", price:5000},
  {name:"Anti-thief 2nd Generation", price:10000},
  {name:"Anti-thief 3rd Generation", price:15000},
  {name:"Anti-thief 4th Generation", price:20000},
  {name:"GPS", price:500},
  {name:"Respray", price:1250},
  {name:"Spoiler", price:2000},
  {name:"Front Bumper", price:1600},
  {name:"Side Skirt", price:1200},
  {name:"Exhaust", price:1500},
  {name:"Frame", price:2000},
  {name:"Grille", price:1250},
  {name:"Hood", price:2000},
  {name:"Neon", price:7000},
  {name:"Fenders", price:1500},
  {name:"Roof", price:2000},
  {name:"Engine", price:8000},
  {name:"Brakes", price:5000},
  {name:"Transmission", price:2000},
  {name:"Suspension", price:5000},
  {name:"Wheels", price:1000},
  {name:"Liverys", price:3500},
  {name:"Plate", price:5000},
  {name:"Turbo non-sport", price:9000},
  {name:"Turbo sport", price:11000},
  {name:"Xeon", price:400},
  {name:"Window Tint", price:200},
];
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
  searchQuery(keyword: string):Observable<any>{
    return this.apollo.watchQuery({
      query: SearchQuery,
      variables:{
        keyword: keyword.toLowerCase()
    }
    })
    .valueChanges
  }
  getUpgrades(){
    return upgrades;
  }
}
