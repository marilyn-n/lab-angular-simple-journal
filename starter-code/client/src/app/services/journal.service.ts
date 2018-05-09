import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {
  constructor(private http: Http) { }

  getAllJournal() {
    return this.http.get('http://localhost:3000/api/journal-entries')
      .map(res => res.json());
  }
  getOneJournal(id) {
    return this.http.get(`http://localhost:3000/api/journal-entries/${id}`)
      .map(res =>  res.json() );
  }
}
