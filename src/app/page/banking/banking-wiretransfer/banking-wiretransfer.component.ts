import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface WireTransfer{
  firstName: string;
  lastName: string;
  amount: number;
  date: Date;
}

const dummy: WireTransfer[] = [
  {firstName: "Miloslav",lastName:"Lavrenty",amount: 200,date: new Date(2019,7,20,3,24,0)  },
  {firstName: "Ali",lastName:"Hussien",amount: 300,date: new Date(2019,7,20,3,24,0)  },
  {firstName: "Lars",lastName:"Busch",amount: 1200,date: new Date(2019,7,20,3,24,0)  },
  {firstName: "Harvey",lastName:"Busch",amount: 20000,date: new Date(2019,7,20,3,24,0)  }
];
@Component({
  selector: 'app-banking-wiretransfer',
  templateUrl: './banking-wiretransfer.component.html',
  styleUrls: ['./banking-wiretransfer.component.scss']
})

export class BankingWiretransferComponent implements OnInit {
  wireTransfer: FormGroup = new FormGroup({
      firstName:  new FormControl('',Validators.required),
      lastName:  new FormControl('',Validators.required),
      amount:  new FormControl('',Validators.required),
  })
  dummyData:WireTransfer[] = dummy;
  displayedColumns: string[] = ['firstName','lastName','amount','date'];

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
  convertDate (date: Date): string{
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }
}
