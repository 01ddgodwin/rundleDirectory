import { Component, OnInit } from '@angular/core';
import { directories } from 'src/data/directories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  directories = directories;

  constructor() { }

  ngOnInit(): void {
  }

}
