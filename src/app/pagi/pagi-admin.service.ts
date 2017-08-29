import { Injectable } from '@angular/core';
import * as myGlobal from '../global';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PagiAdminService {

  constructor(private http:Http) { }
  getCout(table)
  {
  	return this.http.get(myGlobal.hostphp+'/backend/addmatch/countData/'+table).map(
	 		(response:Response) => response);
  }
}
