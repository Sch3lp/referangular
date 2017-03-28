import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';

import { Kantoor } from './kantoor';
import { KantoorZoekCriteria } from './kantoor-zoek-criteria';

@Injectable()
export class KantoorService {

  constructor(private http: Http) {}

  search(criteria: KantoorZoekCriteria): Observable<Kantoor> {
    return this.http
               // ik kan met de rest van de parameters niet veel doen want mapt niet op een veld van Kantoor
               .get(`api/kantoor/?kantoorCode=^${criteria.kantoorCode}$`)
               .map(response => response.json().data)
               // in memory api returnt een array / echte api returnt 1 object...
               .flatMap(x => x)
               .first();
  }

}