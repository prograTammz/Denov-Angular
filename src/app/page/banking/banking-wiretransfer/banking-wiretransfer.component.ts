import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-banking-wiretransfer',
  templateUrl: './banking-wiretransfer.component.html',
  styleUrls: ['./banking-wiretransfer.component.css']
})
export class BankingWiretransferComponent implements OnInit {
  wireTransfer: FormGroup = new FormGroup({
      firstName:  new FormControl('',Validators.required),
      lastName:  new FormControl('',Validators.required),
      amount:  new FormControl('',Validators.required),
  })
   

  constructor(private _snackBar: MatSnackBar) { 

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.wireTransfer.value);

    //dummy data till the service is injected
    //if did success
    let message;
    message = "Successfully sent !";
    //If failed:
    if(this.wireTransfer.value.amount > 230){
      message= "You don't have enough balance";
    } 
    

    this._snackBar.open(message,'Dismiss',{
      duration: 2000
    });
  }
}
