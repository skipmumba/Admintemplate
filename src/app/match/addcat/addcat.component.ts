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

	}

	

	addcat(name,img)
	{
		let obj = {name:name,img:img}
		this.http.post_json(myGlobal.hostphp+'/backend/addmatch/addcat',obj).subscribe(data =>{
			this.router.navigate(['/dashboard']);
		})
	}
 	ngOnInit()
	{
		// this.fileUploaded.emit(true);
	}

}
