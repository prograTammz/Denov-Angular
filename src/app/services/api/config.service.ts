import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) { }
  getConfig(): Observable<Config>{
    return this.http.get(this.configUrl);
  }
}
