import { Component, OnInit } from '@angular/core';
import {DataServiceComponent} from "./data-service/data-service.component";
import {Observable} from "rxjs";


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [DataServiceComponent]
})
export class SearchInputComponent implements OnInit {
  public keyword = "name";
  public data$: Observable<any[]> = new Observable<any[]>();

  constructor(private dataSvc: DataServiceComponent) {
    this.getData();
  }

  selectEvent(item: any) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any){
    // do something when input is focused
  }

  ngOnInit(): void {
  }

  getData(): void{
      this.data$ = this.dataSvc.getAllCountries();
  }


}
