import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  li: any;
  brews = [];

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getBeer().subscribe((data) => {
      this.li = data;
      this.brews = this.li;
    });
  }
}
