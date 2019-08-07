import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import { Config } from 'src/app/models/config.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url: string;
  constructor(private config: ConfigService,) {
    config.getConfig().subscribe((data: Config) =>{
      this.url = data.url;
    })
   }
   
}
