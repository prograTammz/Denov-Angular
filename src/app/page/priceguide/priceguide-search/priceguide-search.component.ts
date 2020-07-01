import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Location } from '@angular/common';
import { PriceguideService } from 'src/app/services/api/priceguide.service';

@Component({
  selector: 'app-priceguide-search',
  templateUrl: './priceguide-search.component.html',
  styleUrls: ['./priceguide-search.component.scss']
})
export class PriceguideSearchComponent implements OnInit {

  searchGroupInput= new FormGroup({
    searchInput: new FormControl('')
  });
  searchValue: string;
  vehicles:any[];
  loading = true;
  error: any;
  noresult: boolean;
  constructor(private PriceGuideService: PriceguideService,private location: Location,private activatedroute:ActivatedRoute,private apollo: Apollo) {
    this.searchValue ="";
    this.vehicles = [];
    this.noresult = true;
   }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params=>{
      this.searchValue = params.get('keyword');
    })
    this.searchQuery();
  }
  search(){
    this.location.replaceState("priceguide/search/"+this.searchValue);
    this.loading = true;
    this.searchQuery();
  }
  searchQuery(){
    this.PriceGuideService.searchQuery(this.searchValue).subscribe((result:any)=>{
      this.vehicles = result.data.searchName;
      
      this.loading = result.loading;
      this.error = result.error;
      this.noresult = this.vehicles.length ==0 ? true: false;
    })
  }
  scroll(el: HTMLElement) {
    const yOffset = -64;
    const y = el.getBoundingClientRect().top + window.pageYOffset +yOffset;
    window.scrollTo({behavior:"smooth",top: y});
  }
}
