import { Component, OnInit } from '@angular/core';
import { HttpService } from '../connect/http.service'
import { Router } from '@angular/router';
import * as myGlobal from '../global'
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
  providers:[HttpService]
})
export class WithdrawComponent implements OnInit {

  	constructor(private _http:HttpService,private router:Router) { }
  	listWithdraw:any
    type;
    textsearch;

    urlStatus = 'all'



  	getWithdraw(id='')
  	{
      this.urlStatus = 'all'
  		this._http.get_json(myGlobal.hostphp+'/backend/withdraw/userWithdraw/'+id).subscribe(
  			data => {
  				this.listWithdraw = data
  				
  			}
  		)
  	}

    searchWithdraw()
    {
      this.urlStatus = 'search'
      this._http.get_json(myGlobal.hostphp+'/backend/withdraw/findEamil/'+this.type+'/'+this.textsearch).subscribe(
        data => {
          this.listWithdraw = data
        }
      )
    }


  	allowStatus(id,status)
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/withdraw/allowstatus/'+id+'/'+status).subscribe(
  			data => {
          if(this.urlStatus == 'all')
          {
            this.getWithdraw()
          }
          else 
          {
            this.searchWithdraw()
          }
  			}
  		)
  	}
  	ngOnInit() {
  		this.getWithdraw()
  	}

}
