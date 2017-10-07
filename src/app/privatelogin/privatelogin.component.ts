import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privatelogin',
  templateUrl: './privatelogin.component.html',
  styleUrls: ['./privatelogin.component.css']
})
export class PrivateloginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log(sessionStorage.getItem('name'));
  }

}
