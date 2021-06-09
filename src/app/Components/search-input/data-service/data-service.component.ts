import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from "rxjs";
@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
@Injectable()
export class DataServiceComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  getAllCountries():Observable<any[]>{
    return this.http.get<any[]>(this.URL_API);
  }

  ngOnInit(): void {
  }

  public URL_API = "https://restcountries.eu/rest/v2/all";

}
