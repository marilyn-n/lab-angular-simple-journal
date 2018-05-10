import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
entryForm = {
  title: '',
  content: '',
};
  constructor(private formService: JournalService ) { }

  ngOnInit() {
  }

  createEntry(myForm) {
    console.log(myForm.value);
    this.formService.createEntry(myForm.value)
    .subscribe(res => {
      console.log('journal created');
      // this.entryForm.content = myForm.value.content;
      // this.entryForm.title = myForm.value.title;
    });
  }

}
