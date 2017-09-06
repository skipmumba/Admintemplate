import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../connect/http.service'
import * as myGlobal from '../../global'


@Component({
  selector: 'app-listcat',
  templateUrl: './listcat.component.html',
  styleUrls: ['./listcat.component.css'],
  providers:[HttpService]
})
export class ListcatComponent implements OnInit {
  hostphp =myGlobal.hostphp
  	constructor(private fetchdata:HttpService) { }
  	random = new Date().getTime()+new Date().getMilliseconds()
	getCatdata : string
  	ngOnInit() {
	  	this.fetchdata.get_json(myGlobal.hostphp+'/backend/addmatch/list_allcat?nocache='+this.random).subscribe(
	  			data => {this.getCatdata = data
            console.log(this.getCatdata);
	  			}
	  		)
 	}

}
