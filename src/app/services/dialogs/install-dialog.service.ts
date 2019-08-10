import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {InstallComponent} from '../../components/install/install.component';
@Injectable({
  providedIn: 'root'
})
export class InstallDialogService {

  public dialogRef: MatDialogRef<InstallComponent>
  constructor(public dialog: MatDialog) {

   }
  openModal(): void{
    const dialogRef = this.dialog.open(InstallComponent,{
      width:'300px'
    });
  }
  closeModal(): void{
    this.dialogRef.close();
  }
}
