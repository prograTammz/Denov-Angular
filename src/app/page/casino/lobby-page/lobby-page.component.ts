import { Component, OnInit } from '@angular/core';
import {JoinTableService} from '../../../services/dialogs/join-table.service';
@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.css']
})
export class LobbyPageComponent implements OnInit {

  constructor(private joinTableModal: JoinTableService) { }

  ngOnInit() {
  }

  joinTable(){
    this.joinTableModal.openModal();
  }
}
