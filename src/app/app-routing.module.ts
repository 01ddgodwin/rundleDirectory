import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Glasgow Directory
import { HomeComponent } from './home/home.component';

//Hotel Directory
import { HotelDirectoryComponent } from './hotel-directory/hotel-directory.component';

//Fort Peck Directory
import { FloorComponent } from './hotel-directory/floor/floor.component';
import { CityDirectoryComponent } from './city-directory/city-directory.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'hotelDirectory',
    component: HotelDirectoryComponent,
    children: [
      { path: '', redirectTo: 'floor1', pathMatch: 'full' },
      { path: ':floor', component: FloorComponent }
    ],
  },
  {
    path: ':directory',
    component: CityDirectoryComponent,
    children: [
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      { path: ':category', component: CityDirectoryComponent }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
