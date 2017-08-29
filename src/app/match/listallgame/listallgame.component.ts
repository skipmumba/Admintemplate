import { Component, OnInit } from '@angular/core';
import * as myGlobal from '../../global'
import { HttpService } from '../../connect/http.service'
import { PagiAdminService } from '../../pagi/pagi-admin.service'
@Component({
  selector: 'app-listallgame',
  templateUrl: './listallgame.component.html',
  styleUrls: ['./listallgame.component.css'],
  providers:[HttpService,PagiAdminService]
})
export class ListallgameComponent implements OnInit {
	getAllmatch:any
  coutData:any
  coutPage:any
  startPagi = 1
  numbers
  random = new Date().getTime()+new Date().getMilliseconds()
  constructor(private getJsonData:HttpService,private pagi:PagiAdminService) {
      this.fetchMatch()
  }
  fetchMatch()
  {
      this.getJsonData.get_json(myGlobal.hostphp+'/backend/addmatch/get_data_sql/matchgame/match_id?nocache='+this.random).subscribe(
          data => this.getAllmatch = data
      )
  }

  fetchMatchNew(pagenow)
  {
    this.getJsonData.get_json(myGlobal.hostphp+'/backend/addmatch/get_data_sql/matchgame/match_id/'+pagenow).subscribe(
          data => {
            this.getAllmatch = data
          }
      )
  }

  nextPage(pagenext)
  {
    this.fetchMatchNew(pagenext)
  }

  ngOnInit() {

    this.pagi.getCout('matchgame').subscribe( data => {
        this.coutData = data['_body']
        this.coutPage = Math.ceil((this.coutData/15))
        this.numbers = new Array(this.coutPage)
     
      })
    // this.coutPage = (this.coutData/15)
    // console.log(this.coutData);
  }

}
