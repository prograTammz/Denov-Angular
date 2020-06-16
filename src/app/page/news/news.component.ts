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
      {title:"Denov's Capital hit One Million dollars for the first time",
    body:`Miloslav Lavrenty expresses hish contentment with reaching 1 million in capital and hopes to reach 2.5M in capital by the end of July and the company value raises to 6 Million dollars.`,
    author:"Denov Admin",
    date:new Date("2020-06-16")},
    {title:"A leading trucking company is suspected for the murderer attempt of Denov's CEO",
    body:`Miloslav Lavrenty's murderer attempt investigation has lead that a Leading trucking company is suspected for the incident. Miloslav has pointed that if the future evidence that will
     be collected proved the current claims, it will declare a business war.`,
    author:"Denov Admin",
    date:new Date("2020-06-15")},
    {title:"Denov has contracted with secruity company: Gruppe 6",
    body:`Miloslav Lavrenty has contracted with Gruppe 6 to increase the secruity of Denov, and has installed CCTV and alarms around the office to prevent what has happened last itme`,
    author:"Denov Admin",
    date:new Date("2020-06-15")},
      {title:"150+ views from 80+ visitor in a single day",
      body:`Denov has gained 150+ views yesterday from many visitors, 50+ was new visitors that hasn't being using Denov, the last updates has increase the awarness of Denov as a brand
      and build up it's reputation with maintenance schedule they price calculator is expected to increase the engagment of the users around Los santos`,
      author:"Denov Admin",
      date:new Date("2020-06-14")},
      {title:"Denov has made $200,000 of profits in a single day !",
      body:`Denov has earned $200,000 in profits yesterday and built up a reputation in car dealership which will give give a huge boost when the online
      marketplace takes place.`,
      author:"Denov Admin",
      date:new Date("2020-06-13")},
      {title:"New updates by Denov",
      body:`Denov has improved current features and more updates will be comming into them too soon.
      <ul>
        <li>Stocks prices are now displayed in charts as removed the worth of each stockholder.</li>
        <li>News are now displayed in better form.</li>
        <li>Added Maintenance Schedule pricing to priceguide and fixes to the insurance pricing</li>
      </ul>`,
      author:"Denov Admin",
      date:new Date("2020-06-13")},
      {title:"Denov's CEO Miloslav Lavrenty had a murder attempt",
      body:`Miloslav Lavrenty was robbed by armed gang in his office in 12th of June and the sensitive information of Denov operations and stack holders was stole,
       Miloslav Lavrenty was moved to France for check ups and recovery for a week, Denov has witnessed a steep lose in it's share price as the operations are postponed.`,
      author:"Denov Admin",
      date:new Date("2020-06-12")},
      {title:"Denov publishes it's development plan with the timeline",
      body:`Denov.co's development team has met Miloslav Lavrenty, Denov's CEO, and show cased it's development plan with the timeline as the following:
      <ol>
      <li>Denov account + Imporved Denov news + New Denov Stocks system: 19th of June.</li>
      <li>Denov Casino + Denov Fee system+ Denov Earning system for investors and management: 26th of June.</li>
      <li>Denov Marketplace + Denov Stock managment system: 3rd July.</li>
      <li>Denov Banking + Denov Contracts: 20th July.</li>
      <li>Improvments and updates till 13th August.</li>
      </ol>
      Next development plan will be announced with new Denov digital Products, the development teams promises performance improvment and vehicle price calculator by the end of this week`,
      author:"Denov Development",
      date:new Date("2020-06-11")},
      {title:"Denov reached 500+ Views from 200+ visitors",
      body:`Denov.co started to catch it's visitors as tens of visitors visits it daily to check it's price guide. Miloslav Lavrenty expresses his contentment with these news as he promises 
      to hit a thousand visitor by the end of the month `,
      author:"Denov Admin",
      date:new Date("2020-06-11")},
      {title:"Denov started to purchase it's trucking flee",
      body:`Denov.co started to purchase it's flee for it's Denov Trucking service, The target is 20 van, 15 mid-size trucks, 5 large sized trucks with investments of $2.5Million  `,
      author:"Denov Admin",
      date:new Date("2020-06-10")},
      {title:"Denov Launches it's price guide with huge increase in share price .",
      body:`Denov has published it's priceguide service to be the first and the only online digital vehicle price guide in Los Santos, Miloslav Lavrenty celebrated the first offical release of Denov's first
      feature with the development team and promises a great update buy the beginning of the next week. Denov's share price jumped to 37.68$ with nearly 20% increase this week and nearly 56% increase
       since last month, due to the high demand on purchase stock shares. Denov's stock price expected to jump near 45$ after the release of the online marketplace and near 60$ at the release of Denov Casino.`,
      author:"Denov Admin",
      date:new Date("2020-06-09")},
      {title:"Denov to Launch it's price guide !",
      body:`Denov will publish it's first feature tommorow at 8:00 PM `,
      author:"Denov IT",
      date:new Date("2020-06-08")},
      {title:"Denov has it's first share holder",
      body:`Miloslav Lavrenty has sold 500 Share to Christoper Lombardi for 30$ each as hewishes stronger relations in the future and more investors to invest in Denov ! `,
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
