import { Component, OnInit } from '@angular/core';
import * as myGlobal from './../../global';
import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css'],
})
export class AddcatComponent implements OnInit {
constructor() { }
hostphp = myGlobal.hostphp
hostng = myGlobal.hostng
 ngOnInit()
{

}

}
