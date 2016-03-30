import {Page} from 'ionic-angular';
import {FirebaseEventPipe} from '../../firebasepipe/firebasepipe';

@Page({
  templateUrl: 'build/pages/page2/page2.html',
  pipes: [FirebaseEventPipe]
})


export class Page2 {

  private firebaseUrl: string;

  constructor() {
    this.firebaseUrl = 'https://futureapp-prague.firebaseio.com/posts';
  }

}
