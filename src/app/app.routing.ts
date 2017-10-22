import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { MatchComponent } from './match/match.component'
import { PrivateloginComponent } from './privatelogin/privatelogin.component'
import { SearchmatchComponent } from './searchmatch/searchmatch.component'
import { WithdrawComponent } from './withdraw/withdraw.component'

const appRoutes: Routes = [
	{path:'addgame',component:MatchComponent},
	{path:'',component:MatchComponent},
	{path:'kawsulabobadmin',component:PrivateloginComponent},
	{path:'searchmatch',component:SearchmatchComponent},
	{path:'withdraw',component:WithdrawComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
