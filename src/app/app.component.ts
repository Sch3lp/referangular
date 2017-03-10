import { Component } from '@angular/core';

@Component({
  moduleId: module.id,  
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  titel = 'Referentiedata';

  entiteiten = ['kantoor', 'dossierbeheerder'];

  hoofdletter(entiteit: string) {
    return entiteit.charAt(0).toUpperCase() + entiteit.slice(1);
  }
}