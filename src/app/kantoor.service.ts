import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Kantoor } from './kantoor';

@Injectable()
export class KantoorService {

  constructor(private http: Http) {}

  search(kantoorCode: string, contactGroep: string, taalForData: string, userId: string, domein: string): Observable<Kantoor> {
    return this.http
               // ik kan met de rest van de parameters niet veel doen want mapt niet op een veld van Kantoor
               .get(`api/kantoor/?kantoorCode=^${kantoorCode}$`)
               .map(response => response.json().data)
               // in memory api returnt een array / echte api returnt 1 object...
               .map(kantoren => kantoren[0]);
  }

}