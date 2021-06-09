import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Form, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-project-user-table',
  templateUrl: './project-user-table.component.html',
  styleUrls: ['./project-user-table.component.scss']
})
export class ProjectUserTableComponent implements OnInit, OnChanges{
  @Input() userDetailsForm: FormGroup;
  @Input() row: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(row) {
    console.log("This is coming from the table class.")
    console.log(row);
  }


  /*
  * Implement the DB calling method and Validation methods
  * Clear the table upon submitting the data.
  * */


}
