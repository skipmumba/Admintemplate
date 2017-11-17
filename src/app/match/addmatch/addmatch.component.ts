import { Component, OnInit } from '@angular/core';
import * as myGlobal from '../../global'
import { HttpService } from '../../connect/http.service'
import 'rxjs/add/operator/debounceTime';
import { Router , NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-addmatch',
  templateUrl: './addmatch.component.html',
  styleUrls: ['./addmatch.component.css'],
  providers:[HttpService]
})
export class AddmatchComponent implements OnInit {

  constructor(private router:Router,private fetchdata:HttpService) { }
  hostphp = myGlobal.hostphp
  getCatdata : string
  mouseLeave = true;
  teamData:any;
  nameTeam1:any;
  picTeam1:any;
  nameTeam2:any;
  picTeam2:any;
  searchShow1 = false;
  searchShow2 = false;
  numbers:any;
  random = new Date().getTime()+new Date().getMilliseconds()
  round:any = 0
  day:any
  month:any
  time:any
  year:any
  cat:any
  selectTeam(name,img,nameModel)
  {

    if(nameModel == 'team1')
    {
      this.nameTeam1 = name
      this.picTeam1 = img
      this.searchShow1 = false
    }
    else if(nameModel == 'team2') 
    {
      this.nameTeam2 = name
      this.picTeam2 = img
      this.searchShow2 = false
    }

  }

  submitMatch()
  {
    let split = this.cat.split("*-*")
    let obj = {
        team1:this.nameTeam1,team2:this.nameTeam2,
        pic1:this.picTeam1,pic2:this.picTeam2,
        round:this.round,
        day:this.day,month:this.month,year:this.year,time:this.time,
        catid:split[0],catname:split[1]
    }
    this.fetchdata.post_json(myGlobal.hostphp+'/backend/addmatch/addgame',obj).subscribe(data => {
       this.router.navigate(['/dashboard']);
    })
  }



 
  ngOnInit() 
  {
  			this.fetchdata.get_json(myGlobal.hostphp+'/backend/addmatch/list_allcat?nocache='+this.random).subscribe(
	  			data => this.getCatdata = data
	  		)

        //get Team
        this.fetchdata.get_json(myGlobal.hostphp+'/backend/addmatch/listTeam?nocache='+this.random).subscribe(
          teamInfo => {
            this.teamData = teamInfo

          }
          
        )

  }

}
  