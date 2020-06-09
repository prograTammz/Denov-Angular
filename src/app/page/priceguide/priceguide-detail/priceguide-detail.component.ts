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
  upgrades: any[];
  constructor(private apollo: Apollo,private activatedroute:ActivatedRoute) { 
    this.upgrades=[
      {name:"Lock 2nd Generation",price:3000},
      {name:"Lock 3rd Generation", price:6000},
      {name:"Alarm 2nd Generation", price:5000},
      {name:"Alarm 3rd Generation", price:10000},
      {name:"GPS", price:500},
      {name:"Respray", price:1250},
      {name:"Spoiler", price:2000},
      {name:"Front Bumper", price:1600},
      {name:"Side Skirt", price:1200},
      {name:"Exhaust", price:1500},
      {name:"Frame", price:2000},
      {name:"Grille", price:1250},
      {name:"Hood", price:2000},
      {name:"Fenders", price:1500},
      {name:"Roof", price:2000},
      {name:"Engine", price:8000},
      {name:"Brakes", price:5000},
      {name:"Transmission", price:2000},
      {name:"Suspension", price:5000},
      {name:"Wheels", price:750},
      {name:"Liverys", price:3500},
      {name:"Plate", price:5000},
      {name:"Turbo", price:9000},
      {name:"Turbo", price:400},
      {name:"Window Tint", price:200},

    ]
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
