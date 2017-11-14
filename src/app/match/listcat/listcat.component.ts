import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../connect/http.service'
import * as myGlobal from '../../global'
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcat',
  templateUrl: './listcat.component.html',
  styleUrls: ['./listcat.component.css'],
  providers:[HttpService]
})
export class ListcatComponent implements OnInit {
  hostphp =myGlobal.hostphp
  	constructor(private fetchdata:HttpService,private router:Router) { }
  	random = new Date().getTime()+new Date().getMilliseconds()
	getCatdata : string


    fetchNewsData()
    {
      this.fetchdata.get_json(myGlobal.hostphp+'/backend/addmatch/list_allcat?nocache='+this.random).subscribe(
          data => {this.getCatdata = data
            console.log(this.getCatdata);
          }
        )
    }

 

    delcat(id)
    {
      this.fetchdata.get_json(myGlobal.hostphp+'/backend/addmatch/del_cat/'+id).subscribe(data =>{
          this.fetchNewsData()
      })
    }
  	ngOnInit() {
	  	this.fetchNewsData()
 	}

}
