import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { UserService } from './services/user.service';
import { BackgrounderDirective } from './directives/backgrounder.directive';

@NgModule({
  declarations: [
    UserComponent,
    HomeHeaderComponent
  ],
  entryComponents: [],
  imports: [
    IonicModule,
    RouterModule.forChild([
      {
        path: 'user',
        component: UserComponent
      }
    ]),
    UserRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService
  ]
})
export class UserModule { }
