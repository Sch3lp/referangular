import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { KantoorService } from './kantoor.service';
import { Kantoor } from './kantoor';
import { KantoorZoekCriteria } from './kantoor-zoek-criteria';

@Component({
  moduleId: module.id,
  selector: 'rd-kantoor',
  templateUrl: './kantoor.component.html',
  styleUrls: [ './kantoor.component.css' ],
})
export class KantoorComponent implements OnInit { 

  gevondenKantoor: Kantoor;

  fout: string;

  criteria: KantoorZoekCriteria = <KantoorZoekCriteria>{};

  constructor(private kantoorService: KantoorService, private router: Router) {}

  ngOnInit(): void {
  }

  search(): void {
    this.gevondenKantoor = null;
    this.fout = null;

    this.kantoorService
      .search(this.criteria)
      .subscribe(
          gevondenKantoor => this.gevondenKantoor = gevondenKantoor,
          error => {
            this.fout = 'Er is een fout opgetreden!';
            console.log(error);
          }
      );
  }

}