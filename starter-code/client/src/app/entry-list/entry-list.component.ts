import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entry: Array<Object> = [];
  constructor(private entries: JournalService) { }

  ngOnInit() {
    this.entries.getAllJournal()
    .subscribe(res => this.entry = res);

  }

}
