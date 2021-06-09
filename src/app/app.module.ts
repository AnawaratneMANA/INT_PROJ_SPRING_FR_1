import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchInputComponent } from './Components/search-input/search-input.component';
import { ProjectUserTableComponent } from './Components/search-input/project-user-table/project-user-table.component';
import { ValidationStatusComponent } from './Components/validation-status/validation-status.component';
import { SourceControlAccessPageComponent } from './Components/source-control-access-page/source-control-access-page.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { DataServiceComponent } from './Components/search-input/data-service/data-service.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    ProjectUserTableComponent,
    ValidationStatusComponent,
    SourceControlAccessPageComponent,
    DataServiceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    AutocompleteLibModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
