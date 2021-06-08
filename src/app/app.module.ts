import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchInputComponent } from './Components/search-input/search-input.component';
import { ProjectUserTableComponent } from './Components/project-user-table/project-user-table.component';
import { ValidationStatusComponent } from './Components/validation-status/validation-status.component';
import { SourceControlAccessPageComponent } from './Components/source-control-access-page/source-control-access-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    ProjectUserTableComponent,
    ValidationStatusComponent,
    SourceControlAccessPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
