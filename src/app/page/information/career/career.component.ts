import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  jobs: object[];
  constructor() { 
    this.jobs=[{
      title:"Driver",
      benefits:[{icon:"attach_money",text:"4000$/Hr"},{icon:"house",text:"house with three room mates"},{icon:"account_balance",text:"Free Denov account "},{icon:"directions_car",text:"Transportation"}],
      roles:[{icon:"directions_car",text:"Transportation"},{icon:"access_time",text:"Four hours daily"},]
    },{
      title:"Bartender",
      benefits:[{icon:"attach_money",text:"4000$/Hr"},{icon:"house",text:"house with three room mates"},{icon:"account_balance",text:"Free Denov account"},{icon:"directions_car",text:"Transportation"}],
      roles:[{icon:"local_cafe",text:"Serving beverage"},{icon:"access_time",text:"Four hours daily"},]
    },{
      title:"Bank clerk",
      benefits:[{icon:"attach_money",text:"5000$/Hr"},{icon:"house",text:"house with two room mates"},{icon:"account_balance",text:"Free Denov account "},{icon:"directions_car",text:"Transportation"}],
      roles:[{icon:"money",text:"Banking service"},{icon:"access_time",text:"Four hours daily"},]
    },{
      title:"Customer service",
      benefits:[{icon:"attach_money",text:"4000$/Hr"},{icon:"house",text:"house with two room mates"},{icon:"account_balance",text:"Free Denov account "},{icon:"directions_car",text:"Transportation"}],
      roles:[{icon:"settings_phone",text:"Denov phone/sms service"},{icon:"access_time",text:"Four hours daily"},]
    },{
      title:"Human Resource",
      benefits:[{icon:"attach_money",text:"6000$/Hr"},{icon:"house",text:"house with one room mates"},{icon:"account_balance",text:"Free Denov account "},{icon:"directions_car",text:"Transportation"}],
      roles:[{icon:"face",text:"Hiring and personel service"},{icon:"access_time",text:"Four hours daily"},]
    },{
      title:"Marketing",
      benefits:[{icon:"attach_money",text:"6000$/Hr"},{icon:"house",text:"house with one room mates"},{icon:"account_balance",text:"Free Denov account "},{icon:"directions_car",text:"Transportation"}],
      roles:[{icon:"campaign",text:"Marketing and advertising"},{icon:"access_time",text:"Six hours daily"},]
    },{
      title:"CEO",
      benefits:[{icon:"attach_money",text:"10000$/Hr"},{icon:"house",text:"house with one room mates"},{icon:"account_balance",text:"Free Denov account "},{icon:"directions_car",text:"Transportation"}],
      roles:[{icon:"business",text:"Managment of denov"},{icon:"access_time",text:"Six hours daily"},]
    }
  ];
  }

  ngOnInit(): void {
  }

}
