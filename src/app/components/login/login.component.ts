import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginDialogService} from '../../services/dialogs/login-dialog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup = new FormGroup({
      email:  new FormControl('',Validators.required),
      password:  new FormControl('',Validators.required),
  })
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { 

  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.login.value);
  }
  closeDialog(): void{
    this.dialogRef.close();
  }
  
}
