import { Component, OnInit } from '@angular/core';
import { HttpService } from '../connect/http.service'
import { MatchmanageService } from '../service/match/matchmanage.service'
import * as myGlobal from '../global'
@Component({
  selector: 'app-searchmatch',
  templateUrl: './searchmatch.component.html',
  styleUrls: ['./searchmatch.component.css'],
  providers:[HttpService]
})
export class SearchmatchComponent implements OnInit {
  	constructor(private _manageMatch:MatchmanageService,private getJsonData:HttpService) { }
	datasearch:any = 'fulldate'
	textsearch:any
	placeHoder = '10-10-2017'
	notFound = false
	disable = false
	getAllmatch:any
  	getsearch()
  	{
	  	this.getJsonData.get_json(myGlobal.hostphp+'/backend/addmatch/searchMatch/'+this.datasearch+'/'+this.textsearch).subscribe(
	  		(data) =>{
	  			this.notFound = false
	  			if(data.no != null)
	  			{
	  				this.notFound = true
	  				setTimeout(()=>{
	  					this.notFound = false
	  				},2000)
	  				this.getAllmatch = null
	  			}
	  			else 
	  			{
	  				this.getAllmatch = data
	  			}
	  		},(err) =>{
	  			alert(123)
	  		}
	  	)
  	}
  	changeVal()
  	{
	  	this.disable = false
	  	switch (this.datasearch) {
	  		case "fulldate":
	  			this.placeHoder = '10-10-2017'
	  			break;
	  		case "day":
	  			this.placeHoder = '10'
	  			break;
	  		case "month":
	  			this.placeHoder = '7'
	  			break;
	  		case "year":
	  			this.placeHoder = '2017'
	  			break;
	  		case "team":
	  			this.placeHoder = 'Newbee'
	  			break;
	  		case "cat_name":
	  			this.placeHoder = 'cs:go'
	  			break;
	  		case "winner":
	  			this.placeHoder = '-'
	  			this.disable = true
	  			break;
	  		case "loser":
	  			this.placeHoder = '-'
	  			this.disable = true
	  			break;

	  		
	  		default:
	  			// code...
	  			break;
	  		}
  	}


  	  handleMatch(id)
	  {
	    this._manageMatch.loadSpin = true
	    this._manageMatch.matchDetail = {}
	    this._manageMatch.getMatch(id).subscribe((data)=>{
	    		
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
	    },(err) =>{
	    	console.log('err');
	    })
	  }

  ngOnInit() {
  }

}
