import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';

import { HttpModule} from '@angular/http';
import { EntryListComponent } from './entry-list/entry-list.component';

import { JournalService } from './services/journal.service';
import { SingleEntryComponent } from './single-entry/single-entry.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'entry-list',  component: EntryListComponent },
  // { path: 'new',  component: EntryFormComponent },
  // { path: ':id',  component: SingleEntryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
