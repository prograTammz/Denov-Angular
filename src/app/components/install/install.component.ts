import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css']
})
export class InstallComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InstallComponent>) {
    
   }

  ngOnInit() {
  }
  closeModal(){
    this.dialogRef.close();
  }
}
