import { EventEmitter, Injectable, Output, Input, AfterViewInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { directory1Categories } from 'src/data/directory1Categories';
import { Category } from './categories.model';

@Injectable({
  providedIn: 'root'
})
export class CityDirectoryService {

  private categories: Category[] = [];
  categorySelected = new EventEmitter<Category>();
  categoryChangedEvent = new EventEmitter<Category[]>();
  categoryListChangedEvent = new Subject<Category[]>();

  @Input() lat!: 48.19379866606058;
  @Output() lang!: -106.63712638349855;

  selectedCategoryItems: any[] = [];
  selectedCategoryChange: Subject<any> = new Subject<any>();
  

  constructor() {
    this.categories = directory1Categories
    this.selectedCategoryChange.subscribe((value) => {
      this.selectedCategoryItems = value;
    })
  }

  getCategories(): Category[] {
    return this.categories.slice();
  }

  getCategory(index: number) {
    return this.categories[index]
  }
  

  
  

}
