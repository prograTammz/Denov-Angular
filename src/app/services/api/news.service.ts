import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import { Config } from 'src/app/models/config.model';
import { News } from 'src/app/models/news.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { UserStorageService } from '../storage/user.service';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string;
  private httpOptions: object;
  private headers: HttpHeaders;
  constructor(private config: ConfigService,private http: HttpClient, private user: UserStorageService) {
   this.config.getConfig().subscribe((data: Config) =>{
      this.url = data.url;
    })
    this.headers = new HttpHeaders({
      'x-auth-token': this.user.getUser().token
    })
    this.httpOptions={
      headers: this.headers
    }
   }
   getNews(page: number, size: number): Observable<News[]>{
      return this.http.get(`${this.url}/api/news?pageNo=${page}&${size}`)
      .pipe(
        first(),
        map((news: News[])=>{
          return news;
        }))
   }
   public postNews(title: string, body: string): Observable<any>{
     const news = {
       title: title,
       body: body
     }
     return this.http.post(`${this.url}/api/news`,news,this.httpOptions)
   }
   public getCount():Observable<Number>{
     return this.http.get(`${this.url}/api/news/count`)
      .pipe(
        first(),
        map((count: number)=>{
          return count;
      }))
   }
}
