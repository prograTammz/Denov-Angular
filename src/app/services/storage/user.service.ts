import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  private userSubject: BehaviorSubject<User>;
  public User: Observable<User>;
  constructor() {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.User = this.userSubject.asObservable();
   }

  public storeUser(user: User): void{
    localStorage.setItem('user',JSON.stringify(user));
    this.userSubject.next(user);
  }
  public removeUser(): void{
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
  public getUser(): User{
    return JSON.parse(localStorage.getItem('user'))
  }
}
