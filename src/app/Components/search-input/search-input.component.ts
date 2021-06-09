import { Component, OnInit } from '@angular/core';
import {DataServiceComponent} from "./data-service/data-service.component";
import {Observable} from "rxjs";
import {FormGroup, FormBuilder, FormArray} from "@angular/forms";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [DataServiceComponent]
})
export class SearchInputComponent implements OnInit {
  public keyword = "name";
  public data$: Observable<any[]> = new Observable<any[]>();
  userDetailsForm: FormGroup;
  row: Array<any> = [];

  constructor(private dataSvc: DataServiceComponent, private fb: FormBuilder) {
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
    this.userDetailsForm = this.fb.group({
      userId: '',
      projectId: '',
      email: 'Nirmith.Anawaratne-inter@dialog.lk',
    })
  }

  onSubmit(): void {
    console.log(this.userDetailsForm.value.projectId)
    let userDetail = {
      userId: this.userDetailsForm.value.userId,
      projectId: this.userDetailsForm.value.projectId,
      email: this.userDetailsForm.value.email
    }
    this.row.push(userDetail);
  }

  getData(): void{
      this.data$ = this.dataSvc.getAllCountries();
  }


}
