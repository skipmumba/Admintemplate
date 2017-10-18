import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../connect/http.service'
import { MatchmanageService } from '../../service/match/matchmanage.service'
import * as myGlobal from '../../global'
import { ReactiveFormsModule, FormsModule,FormControl} from '@angular/forms';
@Component({
  selector: 'app-managematch',
  templateUrl: './managematch.component.html',
  styleUrls: ['./managematch.component.css'],
  providers:[HttpService]
})
export class ManagematchComponent implements OnInit {

  	constructor(private _matchManage:MatchmanageService,private fetchdata:HttpService) { }
  	hostphp = myGlobal.hostphp
	random = new Date().getTime()+new Date().getMilliseconds()
	teamData
  	getCatdata
  	catName
	// editMatch(dataForm)
	// {
	// 	console.log(dataForm.value.matchId);
	// 	// this.fetchdata.get_json(myGlobal.hostphp+'/backend/managematch/update_match/').subscribe(data => {
	// 	// 	console.log(data);
	// 	// })
	// }

  ngOnInit() {
  	this.fetchdata.get_json(myGlobal.hostphp+'/backend/addmatch/listTeam?nocache='+this.random).subscribe(
          teamInfo => {
            this.teamData = teamInfo
          }        
        )

  	this.fetchdata.get_json(myGlobal.hostphp+'/backend/addmatch/list_allcat?nocache='+this.random).subscribe(
	  			data => this.getCatdata = data
	  		)


  }

}
