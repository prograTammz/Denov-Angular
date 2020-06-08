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
    this.isAuthorized = true;
    this.isLoading = false;
    this.newsList = [
      {title:"Denov to Launch it's price guide !",
      body:`Denov will publish it's first feature tommorow at 8:00 PM `,
      author:"Denov IT",
      date:new Date("2020-06-08")},
      {title:"Denov has it's first share holder",
      body:`Miloslav Lavrenty has sold 500 Share to Christoper Lombardi for 30$ each as he wishes stronger relations in the future and more investors to invest in Denov ! `,
      author:"Denov Admin",
      date:new Date("2020-06-08")},
      {title:"Denov is officially the first digital Casino in Los Santos",
      body:`Miloslav Lavrenty has signed the papers for the gambling licenses for Denov Government with Mr.Marcus Cambridge as he expresses his contentment with the speed and professionalism of Los Santos government and it's assistant to business men to invest in Los Santos,
       as Miloslav has pointed that Denov Casino is looking forward to partner with different Casinos so they can great Digitally runned table inside of their casinos aswell. `,
      author:"Denov Admin",
      date:new Date("2020-06-08")},
      {title:"Denov Is officially a legal organization",
      body:"Miloslav Lavrenty has signed the legal and offical papers for Denov.co to operate it's Digital platform legally in Los Santos, and Miloslav Lavrenty expresses his contemtment with the agreement as he wishes more agreements with the government",
      author:"Denov Admin",
      date:new Date("2020-06-01")},{
      title:"Denov is coming back",
      body:"Denov is coming back, the development of denov has resumed. Miloslav lavrenty has returned back to business.",
      author:"Denov Admin",
      date:new Date("2020-05-27")},];
   }

  ngOnInit() {
    this.length = 100;
    this.pageSize = 2;
    this.pageSizeOptions = [2,5,10,25,100];
    this.pageIndex  = 0;
    // this.user = this.userStorage.getUser();
    // if(this.user){
    //   if(this.user.isAdmin || this.user.isSuperAdmin){
    //     this.isAuthorized = true
    //   }
    // }
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.news.getCount().subscribe(
    //     count =>{
    //       this.length = Number(count);
    //       this.getNews(this.pageSize, this.pageIndex);
    //     },
    //     error=>{
  
    //     }
    //   )
    // }, 300);
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
