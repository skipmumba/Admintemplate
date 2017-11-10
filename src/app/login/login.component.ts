import { Component, OnInit } from '@angular/core';
import { HttpService } from '../connect/http.service'
import * as myGlobal from '../global'
import {StoreService} from '../service/store.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[HttpService]
})
export class LoginComponent implements OnInit {

  	constructor(private router:Router,private _http:HttpService,private store:StoreService) { }

  	user:any
  	pass:any
  	login()
  	{
  		let data = {user: this.user,pass:this.pass};
  		this._http.post_json(myGlobal.hostphp+'/backend/login/checklogin',data).subscribe(data => {
  			if(data.status == 'ok')
  			{
  				this.store.setToken(data.jwt)
  				this.router.navigate(['/']);
  			}
  			else 
  			{
  				console.log('no');
  			}
  		})
  	}

  	ngOnInit() {
  	}

}
