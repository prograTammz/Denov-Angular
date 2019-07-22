import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-banking-wiretransfer',
  templateUrl: './banking-wiretransfer.component.html',
  styleUrls: ['./banking-wiretransfer.component.css']
})
export class BankingWiretransferComponent implements OnInit {
  wireTransfer: FormGroup = new FormGroup({
      firstName:  new FormControl(''),
      lastName:  new FormControl(''),
      amount:  new FormControl(''),
  })
   

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.wireTransfer.value);
  }
}
