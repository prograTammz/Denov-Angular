import { Injectable } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from '../../components/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class LoginDialogService {

  public dialogRef: MatDialogRef<LoginComponent>
  constructor(public dialog: MatDialog) {

   }
  openModal(): void{
    const dialogRef = this.dialog.open(LoginComponent,{
      width:'250px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  closeModal(): void{
    this.dialogRef.close();
  }
}
