import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRateService {

  apiUrl = "https://prime.exchangerate-api.com/v5/72e8e207d491c22ecafb6abe/latest/USD";
  constructor(private _http:HttpClient) { }

  getData(){
    return this._http.get(this.apiUrl);
  }
}
