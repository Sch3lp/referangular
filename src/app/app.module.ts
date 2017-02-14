import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }  from './app-routing.module';

import { AppComponent }  from './app.component';
import { KantoorComponent }  from './kantoor.component';
import { KantoorService }  from './kantoor.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule ],
  declarations: [ AppComponent, KantoorComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ KantoorService ]
})
export class AppModule { }
