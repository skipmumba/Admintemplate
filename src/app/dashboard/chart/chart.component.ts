import { Component, OnInit ,Input} from '@angular/core';
import * as myGlobal from '../../global'
import { HttpService } from '../../connect/http.service'
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers:[HttpService]
})
export class ChartComponent implements OnInit {

  	@Input() myValue;
  	subjectTitle:any
  	random = new Date().getTime()+new Date().getMilliseconds()
  	barChartLabels
  	sumall:any
  	barChartType:string = 'bar';
	barChartLegend:boolean = false;
	barChartOptions:any = {
	    scaleShowVerticalLines: false,
	    responsive: true
	  };

 	days31 = [0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  	constructor(private _http:HttpService) { 		
  	}
  	
  	getChart()
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/dashboard/charts/'+this.myValue+'?nocache='+this.random).subscribe(
  			datas =>{
  				console.log(this.myValue);
  				this.sumall = datas.sum
  				this.barChartLabels = this.days31
  				// this.barChartLabels = datas.label
  				this.barChartData = [
						    {data: datas.data, label: 'จำนวน'},
						  ];
  			}
  		)
  	}


	 
	  public barChartData:any[] = [
	    {data: [65, 59, 80, 81, 56, 55, 40, 0, 80, 81, 0, 0, ], label: 'Series A'},
	  ];
	 
	  // events
	  public chartClicked(e:any):void {
	  }
	 
	  public chartHovered(e:any):void {
	    console.log(e);
  }
 

  	ngOnInit() {
  		if(this.myValue == 'income')
	  	{
	  		this.subjectTitle = 'สรุปเงินเข้าเดือนนี้'
	  	}
	  	if(this.myValue == 'outcome')
	  	{
	  		this.subjectTitle = 'สรุปเงินออกเดือนนี้'
	  	}
	  	if(this.myValue == 'profit')
	  	{
	  		this.subjectTitle = 'สรุปกำไรเดือนนี้'
	  	}
	  	this.getChart()
  	}

}
