import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Servicios
import {JournalService} from './services/journal.service';

// Componentes
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';


// rutas
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'home', component : EntryListComponent},
  {path: ':id', component : SingleEntryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
