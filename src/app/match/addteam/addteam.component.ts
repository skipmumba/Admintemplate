import { Component, OnInit } from '@angular/core';
import * as myGlobal from '../../global'
import { HttpService } from '../../connect/http.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css'],
  providers:[HttpService]
})
export class AddteamComponent implements OnInit {
	hostphp = myGlobal.hostphp
	teamName:any
	teamImg:any
  	constructor(private router:Router,private fetchdata:HttpService) { }

  	subMit()
  	{
  		let obj = {name:this.teamName,img:this.teamImg}
  		this.fetchdata.post_json(myGlobal.hostphp+'/backend/addmatch/addTeam',obj).subscribe(data => {
	       	this.router.navigate(['/dashboard']);
	     })
  	}

  	ngOnInit() {
  	}

}
