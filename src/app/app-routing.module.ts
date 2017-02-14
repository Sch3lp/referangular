import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { KantoorComponent }  from './kantoor/kantoor.component';

const ROUTES: Routes = [
    { path: 'kantoor', component: KantoorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
