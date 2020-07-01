import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {UserService} from '../../services/api/user.service';
import {Router} from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: FormGroup = new FormGroup({
    firstName:  new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]+$/)])),
    lastName:  new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]+$/)])),
    email:  new FormControl('',Validators.compose([Validators.required,Validators.email])),
    password:  new FormControl('',Validators.compose([Validators.required,Validators.minLength(8)])),
    repassword:  new FormControl('',Validators.compose([Validators.required,Validators.minLength(8)])),
    phoneNumber:  new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")])),
  })
  passError: boolean;
  isLoading: boolean;
  constructor(private router: Router,private user: UserService,private _snackBar: MatSnackBar) { 
    this.passError = false;
    this.isLoading = false;
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.register.value.password != this.register.value.repassword){
      this._snackBar.open("Your password is not correct", "Close", {duration:2000});
      this.register.controls['password'].reset();
      this.register.controls['repassword'].reset();
      this.passError=true;
      return
    }
    delete this.register.value.repassword;
    this.isLoading = true;
    this.user.register(this.register.value)
      .pipe(first())
      .subscribe(
        data =>{
        this.router.navigate(['/home'])
        this.isLoading = false;
        this._snackBar.open("Succefully registerd & logged in", "Close", {duration:2000})
        },
        error=>{
          this._snackBar.open(error.error, "Close", {duration:2000})
        }
    
    )
    ;
  }
  scroll(el: HTMLElement) {
    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.pageYOffset +yOffset;
    window.scrollTo({behavior:"smooth",top: y});
  }
}
