import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import {UserStorageService} from '../storage/user.service';
import { ConfigService } from './config.service';
import {Config} from 'src/app/models/config.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthSubject: BehaviorSubject<boolean>;
  public isAuth: Observable<boolean>;
  public url;
  constructor(private config: ConfigService,private userStorage: UserStorageService,private http: HttpClient) {
   
    this.isAuthSubject = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('isAuth')));
    this.isAuth = this.isAuthSubject.asObservable();

    config.getConfig().subscribe((data: Config) =>{
      this.url = data.url;
    })
  }

  public login(email: string, password: string){
    return this.http.post<any>(this.url+'/api/auth',{email,password})
          .pipe(map(data=>{
            if(data.user){
              let user: User = data.user;
              this.userStorage.storeUser(user);
              localStorage.setItem('isAuth','true');
              this.isAuthSubject.next(true);
            }
            return data;
          }))
  }
  public logout(): void{
    this.userStorage.removeUser();
    localStorage.setItem('isAuth','false');
    this.isAuthSubject.next(false);
    
  }
}
