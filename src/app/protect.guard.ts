import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router , NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { StoreService } from './service/store.service'
@Injectable()
export class ProtectGuard implements CanActivate {

	constructor(private store:StoreService){

          
    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    	if(this.store.login)
    	{
    		return true
    	}
    	else 
    	{
    		return true
    	}
  }
}
