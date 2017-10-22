import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule ,BsDropdownModule,TabsModule   } from 'ngx-bootstrap';
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HttpModule }    from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { AddcatComponent } from './match/addcat/addcat.component';
import { AddmatchComponent } from './match/addmatch/addmatch.component';
import { ListcatComponent } from './match/listcat/listcat.component';
import { ListallgameComponent } from './match/listallgame/listallgame.component';
import { AddteamComponent } from './match/addteam/addteam.component';
import { PrivateloginComponent } from './privatelogin/privatelogin.component';
import { ManagematchComponent } from './match/managematch/managematch.component';

import { MatchmanageService  } from './service/match/matchmanage.service';
import { SearchmatchComponent } from './searchmatch/searchmatch.component';
import { WithdrawComponent } from './withdraw/withdraw.component'


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
    PrivateloginComponent,
    ManagematchComponent,
    SearchmatchComponent,
    WithdrawComponent,
  ],
  imports: [
    BrowserModule,AlertModule .forRoot(),BsDropdownModule.forRoot(),TabsModule.forRoot(),
     routing,
     ReactiveFormsModule,
     CommonModule,
     ChartsModule,
     Ng2SearchPipeModule,
     FormsModule,
	HttpModule,
  ],
  providers: [MatchmanageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
