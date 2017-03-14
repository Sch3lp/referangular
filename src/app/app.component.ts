import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titel = 'Referentiedata';

  entiteiten = ['kantoor', 'kantoorverantwoordelijke', 'dossierbeheerder', 'fondsadres', 'fondsverantwoordelijke'];

  hoofdletter(entiteit: string) {
    return entiteit.charAt(0).toUpperCase() + entiteit.slice(1);
  }
}
