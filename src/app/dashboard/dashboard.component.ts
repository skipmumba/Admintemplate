import { Component, OnInit ,Input} from '@angular/core';
import * as myGlobal from '../global'
import { HttpService } from '../connect/http.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[HttpService]
})
export class DashboardComponent implements OnInit {
	income = 'income'
	outcome = 'outcome'
	profit = 'profit'
	moneyall:any
  	constructor(private _http:HttpService) { 

  	}
  	getAll()
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/dashboard/getToday').subscribe(
  			data =>{
  				this.moneyall = data
  			}
  		)
  	}
  	ngOnInit() {
  		this.getAll()
  }

}
