import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { floors } from '../../data/floors';

@Component({
  selector: 'app-hotel-directory',
  templateUrl: './hotel-directory.component.html',
  styleUrls: ['./hotel-directory.component.scss']
})
export class HotelDirectoryComponent implements OnInit {

  floors = floors

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
