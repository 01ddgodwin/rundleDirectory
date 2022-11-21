import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HotelDirectoryComponent } from './hotel-directory/hotel-directory.component';
import { GlasgowDirectoryComponent } from './glasgow-directory/glasgow-directory.component';
import { FortPeckDirectoryComponent } from './fort-peck-directory/fort-peck-directory.component';
import { Floor1Component } from './hotel-directory/floor1/floor1.component';
import { Floor2Component } from './hotel-directory/floor2/floor2.component';
import { Floor3Component } from './hotel-directory/floor3/floor3.component';
import { RestaurantsComponent } from './glasgow-directory/restaurants/restaurants.component';
import { HotelsComponent } from './glasgow-directory/hotels/hotels.component';
import { BanksComponent } from './glasgow-directory/banks/banks.component';
import { GasComponent } from './glasgow-directory/gas/gas.component';
import { ShoppingComponent } from './glasgow-directory/shopping/shopping.component';
import { ParksComponent } from './glasgow-directory/parks/parks.component';
import { SchoolsComponent } from './glasgow-directory/schools/schools.component';
import { MapComponent } from './glasgow-directory/map/map.component';
import { BarsComponent } from './glasgow-directory/bars/bars.component';
import { CasinosComponent } from './glasgow-directory/casinos/casinos.component';
import { ToDoComponent } from './glasgow-directory/to-do/to-do.component';
import { CafesComponent } from './glasgow-directory/cafes/cafes.component';
import { ToDoComponent as fpToDo } from './fort-peck-directory/to-do/to-do.component';
import { GasComponent as fpGas } from './fort-peck-directory/gas/gas.component';
import { HotelsComponent as fpHotels } from './fort-peck-directory/hotels/hotels.component';
import { ParksComponent as fpParks } from './fort-peck-directory/parks/parks.component';
import { RestaurantsComponent as fpRestaurants } from './fort-peck-directory/restaurants/restaurants.component';
import { FloorComponent } from './hotel-directory/floor/floor.component';
import { CityDirectoryComponent } from './city-directory/city-directory.component';
import { BusinessListComponent } from './city-directory/categories/business-list/business-list.component';
import { CategoriesComponent } from './city-directory/categories/categories.component';
import { CategoryItemComponent } from './city-directory/categories/category-item/category-item.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HotelDirectoryComponent,
    GlasgowDirectoryComponent,
    FortPeckDirectoryComponent,
    Floor1Component,
    Floor2Component,
    Floor3Component,
    RestaurantsComponent,
    HotelsComponent,
    BanksComponent,
    GasComponent,
    ShoppingComponent,
    ParksComponent,
    SchoolsComponent,
    MapComponent,
    BarsComponent,
    CasinosComponent,
    ToDoComponent,
    CafesComponent,
    fpToDo,
    fpGas,
    fpHotels,
    fpParks,
    fpRestaurants,
    FloorComponent,
    CityDirectoryComponent,
    BusinessListComponent,
    CategoriesComponent,
    CategoryItemComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
