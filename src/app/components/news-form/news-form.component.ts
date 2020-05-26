import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NewsService} from '../../services/api/news.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
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
  onSubmit() {
    this.isLoading = true;
    this.news.postNews(this.new.value.title,this.new.value.body)
    .pipe(first())
    .subscribe(
      data=>{
        this._snackBar.open("Sucessfully published", 'close', {duration: 2000})
        this.closeDialog();
      },
      error=>{
        this._snackBar.open(error.error, 'close', {duration:2000})
        this.isLoading = false;
      }
    )
  }
  closeDialog(): void{
    this.dialogRef.close();
  }
}
