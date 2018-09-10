import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component( {
  selector: 'app-user',
  templateUrl: 'user.component.html'
} )
export class UserComponent {

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
