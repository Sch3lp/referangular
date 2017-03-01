import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { KantoorComponent }  from './kantoor/kantoor.component';
import { DossierbeheerderComponent }  from './dossierbeheerder/dossierbeheerder.component';

const ROUTES: Routes = [
    { path: '', redirectTo: '/kantoor', pathMatch: 'full' },
    { path: 'kantoor', component: KantoorComponent },
    { path: 'dossierbeheerder', component: DossierbeheerderComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
