import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule ,BsDropdownModule,TabsModule   } from 'ngx-bootstrap';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HttpModule }    from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { AddcatComponent } from './match/addcat/addcat.component';
import { AddmatchComponent } from './match/addmatch/addmatch.component';
import { ListcatComponent } from './match/listcat/listcat.component';
import { ListallgameComponent } from './match/listallgame/listallgame.component';
import { AddteamComponent } from './match/addteam/addteam.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchComponent,
    AddcatComponent,
    AddmatchComponent,
    ListcatComponent,
    ListallgameComponent,
    AddteamComponent,
  ],
  imports: [
    BrowserModule,AlertModule .forRoot(),BsDropdownModule.forRoot(),TabsModule.forRoot(),
     routing,
     CommonModule,
     Ng2SearchPipeModule,
     FormsModule,
	HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
