import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import floors from "../hotel-directory.component"
import { HotelDirectoryComponent } from '../hotel-directory.component';
import { floors } from '../../../data/floors';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {

  floors = floors;

  constructor(public router: Router) {};

  ngOnInit(): void {
  }

}
