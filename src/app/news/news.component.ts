import { Component, OnInit } from '@angular/core';
import { HttpService } from '../connect/http.service'
import * as myGlobal from '../global'
declare var $ :any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers:[HttpService]
})
export class NewsComponent implements OnInit {

  	constructor(private _http:HttpService) { }

  	public subject
  	public textarea
  	public options: Object 
  	showEdit = false
  	listnew:any
  	editSub;
  	editId;
  	editText;

  	getNews()
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/news/listnews').subscribe(data=>{
  			this.listnew = data
  		})
  	}

  	delNew(id)
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/news/delNew/'+id).subscribe(data =>{
  			this.showEdit = false
  			this.getNews()
  		})
  	}

  	editNews(id)
  	{
  		this._http.get_json(myGlobal.hostphp+'/backend/news/getNews/'+id).subscribe(data =>{
  				this.showEdit = true
  				this.editSub = data[0].news_subject
  				this.editText = data[0].news_textarea
  				this.editId = data[0].news_id
  			}
  		)
  	}

  	updateNew(id)
  	{
  		let obj = {sub:this.editSub,text:this.editText}
  		this._http.post_json(myGlobal.hostphp+'/backend/news/updateNew/'+id,obj).subscribe(data =>{
  			this.showEdit = false
  			this.getNews()
  			this.editSub = ''
  			this.editText = ''
  			this.editId = ''
  		})
  	}

  	sendNews()
  	{
  		let obj = {sub:this.subject,text:this.textarea}
  		this._http.post_json(myGlobal.hostphp+'/backend/news/insert',obj).subscribe(data =>{
  			this.getNews()
  			this.subject = ''
  			this.textarea = ''
  		})
  	}

  	ngOnInit() {
  		this.getNews()

  		$.FroalaEditor.DefineIcon('alert', {NAME: 'info'});
		$.FroalaEditor.RegisterCommand('alert', {
		title: 'Hello',
		focus: false,
		undo: false,
		height: 500,
		refreshAfterCallback: false,
		callback: function () {
		alert('Hello!');
		}
		});
		this.options={
			toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', '|', 'insertLink', 'insertImage', 'specialCharacters', 'color', '|', 'align', 'formatOL', 'formatUL', '|', 'undo', 'redo', 'clearFormatting'],
		
  			placeholderText: 'เนื้อหา',
		}

  	}

}
