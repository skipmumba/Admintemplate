import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { MatchComponent } from './match/match.component'

const appRoutes: Routes = [
	{path:'addgame',component:MatchComponent},
	{path:'',component:MatchComponent},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
