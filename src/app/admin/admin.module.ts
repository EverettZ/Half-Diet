import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  entryComponents: [],
  imports: [
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent
      }
    ]),
    AdminRoutingModule
  ]
})
export class AdminModule { }
