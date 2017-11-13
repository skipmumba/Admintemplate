import { Component ,OnInit} from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	constructor(private _router:Router){}
	public alertMe(): void {
     setTimeout(function (): void {
       alert('You\'ve selected the alert tab!');
     });
   }
   ngOnInit()
   {
		 
   }
}
