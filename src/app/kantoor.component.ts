import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { KantoorService } from './kantoor.service';
import { Kantoor } from './kantoor';

@Component({
  moduleId: module.id,
  selector: 'rd-kantoor',
  templateUrl: './kantoor.component.html',
  styleUrls: [ './kantoor.component.css' ],
})
export class KantoorComponent implements OnInit { 

  gevondenKantoor: Kantoor;

  constructor(private kantoorService: KantoorService, private router: Router) {}

  ngOnInit(): void {
  }

  search(kantoorCode: string): void {
    this.kantoorService
      .search(kantoorCode, null, null, null, null)
      .subscribe(gevondenKantoor => this.gevondenKantoor = gevondenKantoor);
  }

}