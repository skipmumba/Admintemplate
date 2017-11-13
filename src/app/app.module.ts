import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule ,BsDropdownModule,TabsModule   } from 'ngx-bootstrap';
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpModule }    from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import {StoreService} from './service/store.service'
import { ProtectGuard } from './protect.guard'

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
import { WithdrawComponent } from './withdraw/withdraw.component';
import { WalletsumComponent } from './walletsum/walletsum.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { NewsComponent } from './news/news.component'
import { CheckloginService } from './service/checklogin.service';
import { LoginComponent } from './login/login.component';
import { TopupComponent } from './topup/topup.component'

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
    WalletsumComponent,
    DashboardComponent,
    ChartComponent,
    NewsComponent,
    LoginComponent,
    TopupComponent,
  ],
  imports: [
    BrowserModule,AlertModule .forRoot(),BsDropdownModule.forRoot(),TabsModule.forRoot(),
     routing,
     ReactiveFormsModule,
     CommonModule,
     ChartsModule,
     FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
     Ng2SearchPipeModule,
     FormsModule,
	    HttpModule,
  ],
  providers: [MatchmanageService,ProtectGuard,CheckloginService,StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
