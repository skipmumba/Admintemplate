import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import * as myGlobal from '../../global';
import 'rxjs/add/operator/map';
@Injectable()
export class GetteamService {

  constructor(private http:Http) { }
  getAllmatch:any
  getUrl(url)
  {
  	return this.http.get(url).map(
	 		(response:Response) => response.json());
  }
  getTeam()
  {
  	this.getUrl(myGlobal.hostphp+'/backend/addmatch/listTeam').subscribe(
          data => {
            this.getAllmatch = data
            console.log(this.getAllmatch);
          }
      )
  }

}
