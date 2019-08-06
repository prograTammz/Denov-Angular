import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<any>;
  public User: Observable<any>;
  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
    this.User = this.userSubject.asObservable();
  }

  public login(email: string, password: string){
    return this.http.post<any>('http://localhost:3000/api/auth',{email,password})
          .pipe(map(user=>{
            if(user.token){
              let tempUser = {
                email: email,
                token: user.token
              }
              localStorage.setItem('token',JSON.stringify(tempUser));
              this.userSubject.next(tempUser);
            }
            return user;
          }))
  }
}
