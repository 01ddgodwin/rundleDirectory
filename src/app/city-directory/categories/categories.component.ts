import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { directory1Categories } from 'src/data/directory1Categories';
import { directory2Categories } from 'src/data/directory2Categories';
import { Category } from '../categories.model';
import { CityDirectoryService } from '../city-directory.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryItemComponent } from './category-item/category-item.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  category!: Category[];
  subscription!: Subscription;

  @Output() categoryWasSelected = new EventEmitter<Category>();

  constructor(
    private cityDirectoryService: CityDirectoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cityDirectoryService.getCategories();
  }

  ngOnInit(): void {

    console.log("Categories")

    // This will display directory1 or directory 2 depending on which one is selected in the url
    if (this.router.url.includes('directory1')) {
      this.category = directory1Categories;
    } else if (this.router.url.includes('directory2')) {
      this.category = directory2Categories;
    }

    this.subscription =
      this.cityDirectoryService.categoryListChangedEvent.subscribe(
        (category: Category[]) => {
          this.category = category;
        }
      );
  }

  onCategorySelected(category: Category) {
    this.categoryWasSelected.emit(category);
  }
}
