import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Form, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-project-user-table',
  templateUrl: './project-user-table.component.html',
  styleUrls: ['./project-user-table.component.scss']
})
export class ProjectUserTableComponent implements OnInit, OnChanges{
  @Input() userDetailsForm: FormGroup;
  @Input() row: Array<any> = [];

  //Setting Headers to HttpClient.
  header = new HttpHeaders({
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYW1lIiwiZXhwIjoxNjI0ODE4OTAzLCJpYXQiOjE2MjQ3ODI5MDN9.0nSmWKNG8mk_LsiYwps7JnjEWHgAKZms0-MZYY5S96E",
    'Access-Control-Allow-Origin': '*'
  })
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  ngOnChanges(row) {
    console.log("This is coming from the table class.")
    console.log(row);
  }

  //When Delete Button is Pressed.
  deleteItem(object){
    console.log("Item Delete!" + object);
    this.row.forEach((value, index) => {
      if(value == object){
        this.row.splice(index, 1)
      }
    })
    console.log(this.row);
  }

  SaveDataInDataBase(object){
    console.log(object);
    const url = 'http://localhost:8080/api/v1/form';
    this.httpClient.post(url, object)
      .subscribe(
        (result) => {
         alert("Data Inserted Successfully" + result);
        }
      )
  }


  /*
  * Implement the DB calling method and Validation methods
  * Clear the table upon submitting the data.
  * */


}
