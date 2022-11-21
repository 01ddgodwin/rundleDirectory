import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { directory1Categories } from 'src/data/directory1Categories';
import { Category } from './categories.model';

@Component({
  selector: 'app-city-directory',
  templateUrl: './city-directory.component.html',
  styleUrls: ['./city-directory.component.scss']
})
export class CityDirectoryComponent implements OnInit {  
  
  selectedCategory!: Category;

  categories = directory1Categories;

  constructor(route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log("City Directory")
  }

}
