import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NewsService} from '../../services/api/news.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {

  isLoading: boolean;
  new: FormGroup = new FormGroup({
      body:  new FormControl('',Validators.required),
      title:  new FormControl('',Validators.required),
  })
  constructor(private news: NewsService,public dialogRef: MatDialogRef<NewsFormComponent>,private _snackBar: MatSnackBar) {
    this.isLoading = false;
   }

  ngOnInit() {
  }
  closeDialog(): void{
    this.dialogRef.close();
  }
}
