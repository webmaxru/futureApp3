import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import {enableProdMode} from 'angular2/core';
enableProdMode();

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
    //mode: 'wp'
  },
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
