import { Component } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public alertMe(): void {
     setTimeout(function (): void {
       alert('You\'ve selected the alert tab!');
     });
   }
}
