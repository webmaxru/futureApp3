import {Page} from 'ionic-angular';
import {Speaker} from '../../models/speaker-model';
import {SpeakerService} from '../../providers/speaker-service';
import {OnInit} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [SpeakerService]
})
export class Page1 implements OnInit {

  speakers: Speaker[];

  ngOnInit() { this.getSpeakers(); }

  constructor(private _speakerService: SpeakerService) {};

  getSpeakers() {
    this._speakerService.getSpeakers()
      .subscribe(speakers => this.speakers = speakers);
  }

}
