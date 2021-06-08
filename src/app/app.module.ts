import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchInputComponent } from './Components/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
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
