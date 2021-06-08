import { Component, OnInit } from '@angular/core';
import {DataServiceComponent} from "./data-service/data-service.component";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [DataServiceComponent]
})
export class SearchInputComponent implements OnInit {

  constructor(private dataSvc: DataServiceComponent) {
    this.getData();
  }

  public keyword = "";
  data = [
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 3,
      name: "C"
    },
  ]

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

  getData(){
    this.dataSvc.getAllCountries().subscribe(console.log);
  }


}
