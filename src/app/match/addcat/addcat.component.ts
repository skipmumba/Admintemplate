import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import * as myGlobal from './../../global';
import { FormsModule }   from '@angular/forms';
import { HttpService } from '../../connect/http.service'
import { Router , NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css'],
  providers:[HttpService]
})
export class AddcatComponent implements OnInit {
	constructor(private http:HttpService,private router:Router) { 


		// //force refresh link because router angular not reloaded same component
		// this.router.routeReuseStrategy.shouldReuseRoute = function(){
  //       	return false;
  //    	}

  //    	this.router.events.subscribe((evt) => {
  //       if (evt instanceof NavigationEnd) {
  //          // trick the Router into believing it's last link wasn't previously loaded
  //          this.router.navigated = false;
  //          // if you need to scroll back to top, here is the right place
  //          window.scrollTo(0, 0);
  //      	 }
  //   	});
  //    	//force refresh link because router angular not reloaded same component
	}

	

	addcat(name,img)
	{
		let obj = {name:name,img:img}
		this.http.post_json(myGlobal.hostphp+'/backend/addmatch/addcat',obj).subscribe(data =>{
			this.router.navigate(['/']);
		})
	}
 	ngOnInit()
	{
		// this.fileUploaded.emit(true);
	}

}
