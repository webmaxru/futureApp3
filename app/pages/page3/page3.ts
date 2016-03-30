import {Page} from 'ionic-angular';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

import {Inject} from 'angular2/core';
import {FirebaseRef} from 'angularfire2';

@Page({
  templateUrl: 'build/pages/page3/page3.html',
  providers: [FIREBASE_PROVIDERS, defaultFirebase('https://futureapp-prague.firebaseio.com/posts/')]
})
export class Page3 {

  questions: Observable<any>;
  postsRef: Firebase;

  constructor(af: AngularFire, @Inject(FirebaseRef) ref:Firebase) {
    this.questions = af.list('');
    this.postsRef = ref;
  }

  onKeyUp($event, nameInput, messageInput) {
    if ($event.which === 13 && messageInput.value) {
      this.createPost(nameInput, messageInput);
    }
  };

  createPost(nameInput, messageInput) {

    this.postsRef.push({
      name: nameInput.value,
      message: messageInput.value
    });

    messageInput.value = null;
  };

}
