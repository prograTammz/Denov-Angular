import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { JoinTableComponent } from 'src/app/components/join-table/join-table.component';

@Injectable({
  providedIn: 'root'
})
export class JoinTableService {

  public dialogRef: MatDialogRef<JoinTableComponent>
  constructor(public dialog: MatDialog) {

   }
  public openModal(): void{
    const dialogRef = this.dialog.open(JoinTableComponent,{
      width:'300px'
    });
  }
  public closeModal(): void{
    this.dialogRef.close();
  }
}
