import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { NewsFormComponent } from 'src/app/components/news-form/news-form.component';

@Injectable({
  providedIn: 'root'
})
export class AddNewsDialogService {
  public dialogRef: MatDialogRef<NewsFormComponent>
  constructor(public dialog: MatDialog) { }
  openModal(): void{
    const dialogRef = this.dialog.open(NewsFormComponent,{
      width:'400px'
    });
  }
  closeModal(): void{
    this.dialogRef.close();
  }
}
