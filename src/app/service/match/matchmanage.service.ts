import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import * as myGlobal from '../../global';
import 'rxjs/add/operator/map';
@Injectable()
export class MatchmanageService {
	hostphp = myGlobal.hostphp
	constructor(private http:Http) { }
	show = false;
	loadSpin = false;
	random = new Date().getTime()+new Date().getMilliseconds()

	searchShow1 = false;
	searchShow2 = false;
	nameTeam1:any;
  	picTeam1:any;
  	nameTeam2:any;
  	picTeam2:any;


	doughnutChartLabels:string[] = [];
 	doughnutChartData:number[] = [];
  	doughnutChartType:string = 'doughnut';

  	chartPriceLabel:string[] = [];
  	chartPriceData:string[] = [];
  	chartPriceType:string = 'doughnut';

  	colors: any = [{
	    backgroundColor:["#8e44ad","#d35400"],
  }];

	matchDetail = {}

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


	showManageMatch()
	{
		this.show = true
	}
	hideManageMatch()
	{
		this.show = false
	}

	getMatch(id)
	{
		return this.http.get(myGlobal.hostphp+'/backend/managematch/handleMatch/'+id+'?nocache='+this.random)
		.map((response:Response) => response.json())	
	}



}
