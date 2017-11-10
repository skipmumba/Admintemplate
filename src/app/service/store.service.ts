import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
 	
  constructor() { }

  token = null
  login = false

  setToken(token)
  {
  	this.login = true
  	this.token = token
  }

}
