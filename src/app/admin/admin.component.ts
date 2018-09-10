import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component( {
  selector: 'app-admin',
  templateUrl: 'admin.component.html'
} )
export class AdminComponent {

  constructor (
    private platform: Platform
  ) {

    this.initializeApp();

  }

  initializeApp() {

    this.platform
      .ready()
      .then( () => {


      } );
  }
}
