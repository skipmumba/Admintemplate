import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { MatchComponent } from './match/match.component'
import { PrivateloginComponent } from './privatelogin/privatelogin.component'


const appRoutes: Routes = [
	{path:'addgame',component:MatchComponent},
	{path:'',component:MatchComponent},
	{path:'kawsulabobadmin',component:PrivateloginComponent},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
