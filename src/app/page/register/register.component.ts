import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
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
  constructor(private _snackBar: MatSnackBar) { 
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
    console.log(this.register.value)
    this.isLoading = true;
    this._snackBar.open("Registerd", "Close", {duration:2000});
  }

}
