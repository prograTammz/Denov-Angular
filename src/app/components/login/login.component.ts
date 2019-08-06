import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../services/api/auth.service';
import { first } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading: boolean;
  login: FormGroup = new FormGroup({
      email:  new FormControl('',Validators.required),
      password:  new FormControl('',Validators.required),
  })
  constructor(private auth: AuthService,public dialogRef: MatDialogRef<LoginComponent>,private _snackBar: MatSnackBar) { 
    this.isLoading = false;
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.login.value);
    this.isLoading = true;
    this.auth.login(this.login.value.email,this.login.value.password)
      .pipe(first())
      .subscribe(
        data =>{
          console.log(data);
          this._snackBar.open("Sucessfully loggged in !", 'close', {duration: 2000})
          this.closeDialog();
        },
        error =>{
          console.error(error);
          console.log(error.error);
          this._snackBar.open(error.error, 'close', {duration:2000})
          this.isLoading = false;
        }
      )
  }
  closeDialog(): void{
    this.dialogRef.close();
  }
  
}
