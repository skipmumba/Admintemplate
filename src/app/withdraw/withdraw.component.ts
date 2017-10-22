import { Component, OnInit } from '@angular/core';
import { HttpService } from '../connect/http.service'
import * as myGlobal from '../global'
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
  providers:[HttpService]
})
export class WithdrawComponent implements OnInit {

  	constructor(private _http:HttpService) { }
  	listWithdraw:any
  	getWithdraw(id='')
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/withdraw/userWithdraw/'+id).subscribe(
  			data => {
  				this.listWithdraw = data
  				
  			}
  		)
  	}
  	allowStatus(id,status)
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/withdraw/allowstatus/'+id+'/'+status).subscribe(
  			data => {
  							
  			}
  		)
  	}
  	ngOnInit() {
  		this.getWithdraw()
  	}

}
