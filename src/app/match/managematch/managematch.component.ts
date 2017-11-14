import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';
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

  	constructor(private _matchManage:MatchmanageService,private fetchdata:HttpService,private router:Router) { }
  	hostphp = myGlobal.hostphp
	random = new Date().getTime()+new Date().getMilliseconds()
	teamData
  	getCatdata
  	catName

  upDate(catid,day,month,year,time,winer,matchid)
  {
    let obj = {
      team1:this._matchManage.nameTeam1,team2:this._matchManage.nameTeam2,
      pic1:this._matchManage.picTeam1,pic2:this._matchManage.picTeam2,
      catid:catid,day:day,month:month,year:year,time:time,winner:winer,matchid:matchid
    }
    this.fetchdata.post_json(myGlobal.hostphp+'/backend/managematch/update_match',obj).subscribe(data =>{
      this._matchManage.show = false
      this.router.navigate(['/dashboard']);
    })
    // console.log(obj);
  }

  del(id)
  {
    this.fetchdata.get_json(myGlobal.hostphp+'/backend/managematch/del_match/'+id).subscribe(
          del => {
            this._matchManage.show = false
            this.router.navigate(['/dashboard']);
          }        
        )
  }


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
