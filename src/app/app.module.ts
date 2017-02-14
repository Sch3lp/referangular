import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './stub/in-memory-data.service';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }  from './app.component';

import { KantoorComponent }  from './kantoor/kantoor.component';
import { KantoorService }  from './kantoor/kantoor.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule ],
  declarations: [ AppComponent, KantoorComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ KantoorService ]
})
export class AppModule { }
