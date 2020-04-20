import { Component, OnInit } from '@angular/core';
import { ApiRateService } from '../api-rate.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  rate : any = [];

  constructor(private _api:ApiRateService) { }

  ngOnInit(): void {
    this._api.getData().subscribe(
      (res:any)=>this.rate = res
    )
  }

}
