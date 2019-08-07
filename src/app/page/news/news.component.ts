import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {UserStorageService} from '../../services/storage/user.service';
import {User} from '../../models/user.model';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  length:number;
  pageSize:number
  pageSizeOptions: number[];
  pageEvent: PageEvent;
  isAuthorized: boolean;
  user: User;
  constructor(private userStorage: UserStorageService) {
    this.isAuthorized = false;
   }

  ngOnInit() {
    this.length = 100;
    this.pageSize = 10;
    this.pageSizeOptions = [5,10,25,100];
    this.user = this.userStorage.getUser();
    if(this.user){
      if(this.user.isAdmin || this.user.isSuperAdmin){
        this.isAuthorized = true
      }
    }
    
  }

}
