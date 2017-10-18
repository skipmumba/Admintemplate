import { Component, OnInit } from '@angular/core';
import * as myGlobal from '../../global'
import { HttpService } from '../../connect/http.service'
import { PagiAdminService } from '../../pagi/pagi-admin.service'
import { MatchmanageService } from '../../service/match/matchmanage.service'


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
  constructor(private _manageMatch:MatchmanageService,private getJsonData:HttpService,private pagi:PagiAdminService) {
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


//edit match by service
  handleMatch(id)
  {
    this._manageMatch.loadSpin = true
    this._manageMatch.matchDetail = {}
    this._manageMatch.getMatch(id).subscribe(data=>{
        this._manageMatch.matchDetail = data
        this._manageMatch.doughnutChartData = [data.people1,data.people2]
        this._manageMatch.doughnutChartLabels = [data.name1,data.name2]

        this._manageMatch.chartPriceData = [data.price1,data.price2]
        this._manageMatch.chartPriceLabel = [data.name1,data.name2]
        this._manageMatch.nameTeam1 = data.name1
        this._manageMatch.picTeam1 =  data.pic1
        this._manageMatch.nameTeam2 = data.name2
        this._manageMatch.picTeam2 =  data.pic2
        this._manageMatch.picTeam2 =  data.pic2
        this._manageMatch.sumprice = parseInt(data.price1)+parseInt(data.price2)
        if(data.price1 > 1 )
        {
           this._manageMatch.sumprice -=1; 
        }
        if(data.price2 > 1)
        {
           this._manageMatch.sumprice -=1; 
        }
        if(this._manageMatch.sumprice == 2)
        {
          this._manageMatch.sumprice = 0
        }
        setTimeout(()=>{
          this._manageMatch.loadSpin = false
          this._manageMatch.showManageMatch() // show form edit
        },100)
    })
  }
//end


  ngOnInit() {

    this.pagi.getCout('matchgame').subscribe( data => {
        this.coutData = data['_body']
        this.coutPage = Math.ceil((this.coutData/15))
        this.numbers = new Array(this.coutPage)
     
      })
 
  }

}
