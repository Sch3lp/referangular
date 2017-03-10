import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { KantoorComponent }  from './kantoor/kantoor.component';
import { KantoorverantwoordelijkeComponent }  from './kantoorverantwoordelijke/kantoorverantwoordelijke.component';
import { DossierbeheerderComponent }  from './dossierbeheerder/dossierbeheerder.component';
import { FondsadresComponent }  from './fondsadres/fondsadres.component';
import { FondsverantwoordelijkeComponent }  from './fondsverantwoordelijke/fondsverantwoordelijke.component';

const ROUTES: Routes = [
    { path: '', redirectTo: '/kantoor', pathMatch: 'full' },
    { path: 'kantoor', component: KantoorComponent },
    { path: 'kantoorverantwoordelijke', component: KantoorverantwoordelijkeComponent },
    { path: 'dossierbeheerder', component: DossierbeheerderComponent },
    { path: 'fondsadres', component: FondsadresComponent },
    { path: 'fondsverantwoordelijke', component: FondsverantwoordelijkeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
