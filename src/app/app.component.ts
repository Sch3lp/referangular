import { Component } from '@angular/core';

@Component({
  moduleId: module.id,  
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  titel = 'Referentiedata';

  domeinen = ['kantoor', 'dossierbeheerder'];

  hoofdletter(domein: string) {
    return domein.charAt(0).toUpperCase() + domein.slice(1);
  }
}