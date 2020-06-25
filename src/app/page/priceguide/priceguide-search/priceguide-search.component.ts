import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Location } from '@angular/common';
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
  constructor(private location: Location,private activatedroute:ActivatedRoute,private apollo: Apollo) {
    this.searchValue ="";
    this.vehicles = [];
   }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params=>{
      this.searchValue = params.get('keyword');
    })
    this.searchQuery();
  }
  search(){
    this.location.replaceState("priceguide/search/"+this.searchValue);
    this.searchQuery();
  }
  searchQuery(){
    this.apollo.watchQuery({
      query: SearchQuery,
      variables:{
        keyword: this.searchValue.toLowerCase()
    }
    })
    .valueChanges.subscribe((result:any)=>{
      this.vehicles = result.data.searchName;
      this.loading = result.loading;
      this.error = result.error;
    })
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth", block: 'center' });
  }
}
