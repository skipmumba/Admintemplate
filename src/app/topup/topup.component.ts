import { Component, OnInit } from '@angular/core';
import { HttpService } from '../connect/http.service'
import * as myGlobal from '../global'
@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css'],
  providers:[HttpService]
})
export class TopupComponent implements OnInit {

  	constructor(private _http:HttpService) { }
  	user:any
  	pass:any
  	phone:any
  	listTop:any
  	subMit()
  	{
  		let obj = {user:this.user,pass:this.pass,phone:this.phone}
  		// console.log(obj);
  		this._http.post_json(myGlobal.hostphp+'/backend/topup/inserttop',obj).subscribe(data =>{
  			if(data.status == 'ok')
  			{
  				this.user = ''
  				this.pass = ''
  				this.phone = ''
  				this.listUser()
  			}
  		})
  	}

  	delUser(id)
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/topup/del/'+id).subscribe(data=>{
  			this.listUser()
  		})
  	}

  	listUser()
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/topup/listtop').subscribe(data=>{
  			this.listTop = data
  		})
  	}

  	ngOnInit() {
  		this.listUser()
  	}

}
