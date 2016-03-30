import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Speaker} from '../models/speaker-model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpeakerService {

  constructor(private http: Http) { }

  private _speakersUrl = 'data/speaker-data.json';

  getSpeakers() {
    return this.http.get(this._speakersUrl)
      .map(res => <Speaker[]> res.json().speakers)
  }

}
