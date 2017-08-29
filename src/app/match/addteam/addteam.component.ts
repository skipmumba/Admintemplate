import { Component, OnInit } from '@angular/core';
import * as myGlobal from '../../global'
@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
	hostphp = myGlobal.hostphp
  constructor() { }

  ngOnInit() {
  }

}
