import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Form, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-project-user-table',
  templateUrl: './project-user-table.component.html',
  styleUrls: ['./project-user-table.component.scss']
})
export class ProjectUserTableComponent implements OnInit {
  @Input() userDetailsForm: FormGroup;
  @Input() row: Array<FormGroup> = [];
  constructor() { }

  ngOnInit(): void {
  }

  //Method to catch the data coming from the parent.


}
