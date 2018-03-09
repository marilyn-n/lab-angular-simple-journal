import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';



import { AppComponent } from './app.component';

import { HttpModule} from '@angular/http';
import { EntryListComponent } from './entry-list/entry-list.component';

import { JournalService } from './services/journal.service';

const routes = [
  { path: '/entry-list', component: EntryListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
