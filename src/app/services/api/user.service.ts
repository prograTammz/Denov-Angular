import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../api/auth.service';
import {UserStorageService} from '../storage/user.service';
import { map, catchError, first } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import {ConfigService} from './config.service';
import { Config } from 'src/app/models/config.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url;
  constructor(private config: ConfigService,private user: UserStorageService, private auth: AuthService,private http: HttpClient) {
    config.getConfig().subscribe((data: Config) =>{
      this.url = data.url;
    })
   }
  
  register(user: any): Observable<User>{
    return this.http.post(this.url+'/api/users', user )
      .pipe(
        first(),
        map((user: User)=>{
          if(user){
            this.auth.isAuthSubject.next(true);
            this.user.storeUser(user);
            return user
          }
      }))
  }
}
