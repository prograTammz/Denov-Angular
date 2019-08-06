import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import {UserStorageService} from '../storage/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthSubject: BehaviorSubject<boolean>;
  public isAuth: Observable<boolean>;
  constructor(private userStorage: UserStorageService,private http: HttpClient) {
   
    this.isAuthSubject = new BehaviorSubject<boolean>(Boolean(localStorage.getItem('isAuth')));
    this.isAuth = this.isAuthSubject.asObservable();
  }

  public login(email: string, password: string){
    return this.http.post<any>('http://localhost:3000/api/auth',{email,password})
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
