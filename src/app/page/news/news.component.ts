import { Component, OnInit, AfterViewChecked} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {UserStorageService} from '../../services/storage/user.service';
import {User} from '../../models/user.model';
import {NewsService} from '../../services/api/news.service';
import { AddNewsDialogService } from 'src/app/services/dialogs/add-news-dialog.service';
import { News } from 'src/app/models/news.model';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  length:number;
  pageSize:number
  pageSizeOptions: number[];
  pageIndex: number;
  pageEvent: PageEvent;
  isAuthorized: boolean;
  user: User;
  newsList: News[];
  isLoading: boolean;
  constructor(private newsForm: AddNewsDialogService,private userStorage: UserStorageService, private news: NewsService) {
    this.isAuthorized = false;
    this.isLoading = false;
    this.newsList = [];
   }

  ngOnInit() {
    this.length = 100;
    this.pageSize = 2;
    this.pageSizeOptions = [2,5,10,25,100];
    this.pageIndex  = 0;
    this.user = this.userStorage.getUser();
    if(this.user){
      if(this.user.isAdmin || this.user.isSuperAdmin){
        this.isAuthorized = true
      }
    }
    this.isLoading = true;
    setTimeout(() => {
      this.news.getCount().subscribe(
        count =>{
          this.length = Number(count);
          this.getNews(this.pageSize, this.pageIndex);
        },
        error=>{
  
        }
      )
    }, 300);
  }
  openDialog(){
    this.newsForm.openModal();
  }
  getNews(size: number,number: number){
    this.news.getNews(number+1,size).subscribe(
      (news: News[])=>{
        this.newsList = news;
        console.log(this.newsList);
      },
      error =>{

      }
    )
    this.isLoading =false;
  }
  onPaginateChange(event){
    this.pageEvent = event;
    this.pageSize = this.pageEvent.pageSize;
    this.pageIndex = this.pageEvent.pageIndex;
    this.getNews(this.pageSize,this.pageIndex);
  }
  refresh(){
    this.isLoading = true;
    this.getNews(this.pageSize,this.pageIndex);
  }
  date(dateString: string){
    const date = new Date(dateString);
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  }
}
