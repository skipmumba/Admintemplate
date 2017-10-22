import { Component, OnInit } from '@angular/core';
import * as myGlobal from '../global'
import { HttpService } from '../connect/http.service'
@Component({
  selector: 'app-walletsum',
  templateUrl: './walletsum.component.html',
  styleUrls: ['./walletsum.component.css'],
  providers:[HttpService]
})
export class WalletsumComponent implements OnInit {

  	constructor(private _http:HttpService) { }
  	listWallet:any
  	type
  	textsearch
  	searchType()
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/getwallet/specificSearch/'+this.type+'/'+this.textsearch).subscribe(
		  	data => {
		  				
		  		this.listWallet = data
		  	}
		)
  	}

 
	getWallet()
	{
		this._http.get_json(myGlobal.hostphp+'/backend/getwallet/listwallet/').subscribe(
		  	data => {
		  				
		  		this.listWallet = data
		  	}
		)
	}

  ngOnInit() {
  	this.getWallet()
  }

}
