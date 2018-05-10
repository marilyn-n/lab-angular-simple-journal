import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {
  base_URL = 'http://localhost:3000';
  constructor(private http: Http) { }

  getAllJournal() {
    return this.http.get(`${this.base_URL}/api/journal-entries`)
      .map(res => res.json());
  }
  getOneJournal(id) {
    return this.http.get(`${this.base_URL}/api/journal-entries/${id}`)
      .map(res =>  res.json() );
  }

  createEntry(newEntry) {
  return this.http.post(`${this.base_URL}/api/journal-entries`, newEntry)
  .map(res => res.json());
  }

}
