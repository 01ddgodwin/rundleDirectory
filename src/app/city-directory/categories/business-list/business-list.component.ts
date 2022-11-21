import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { json } from 'body-parser';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/city-directory/categories.model';
import { CityDirectoryService } from 'src/app/city-directory/city-directory.service';
import { directory1Categories } from 'src/data/directory1Categories';
import { CategoryItemComponent } from '../category-item/category-item.component';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss'],
  providers: [CategoryItemComponent, CityDirectoryService],
})
export class BusinessListComponent implements OnInit {
  categories: Category[] = directory1Categories;
  @Input() category!: Category;
  id!: number;

  lat = 48.19379866606058;
  long = -106.63712638349855;

  directory1 = directory1Categories;

  businessItem: any = this.cityDirectory.selectedCategoryItems;

  zoom = 13;
  loader = new Loader({
    apiKey: 'AIzaSyCtkj02rgOrKheWUYs9SAIYPfh7kXr-zV0'
  })

  loadMapSubscription!: Subscription

  constructor(
    private cityDirectory: CityDirectoryService,
    public router: Router,
    private route: ActivatedRoute,
    private categoryItem: CategoryItemComponent
  ) {
    this.categoryItem.businessItem;
    // This will use the coordinates for the center of the map depending on which directory was chosen
    if (this.router.url.includes('directory1')) {
      this.lat = 48.19379866606058;
      this.long = -106.63712638349855
    } else if (this.router.url.includes('directory2')) {
      this.lat = 48.0086631782855;
      this.long = -106.44714927464477;
    }
  }

  ngOnInit(): void {

    if (this.router.url.includes('map')) {
      
    }

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.category = this.cityDirectory.getCategory(this.id);
    });

    // let zoom = 15;
    // let loader = new Loader({
    //   apiKey: 'AIzaSyCtkj02rgOrKheWUYs9SAIYPfh7kXr-zV0',
    // });

    this.loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: { lat: this.lat, lng: this.long },
        zoom: this.zoom,
        minZoom: this.zoom,
        maxZoom: this.zoom + 4,
        mapTypeId: "hybrid",
        // restriction: {
        //   latLngBounds: {
        //     north: 48.245378,
        //     south: 48.165985,
        //     east: -106.552094,
        //     west: -106.680808,
        //   },
        // },
        styles: [
          {
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road.local',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road.local',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
        ],
        disableDefaultUI: true,
      });

      const youAreHere = 'https://i.postimg.cc/fT7T3Fz5/youarehere.png';

      if (this.router.url.includes("directory1")) {
        const youAreHerePin = new google.maps.Marker({
          position: { lat: this.lat, lng: this.long },
          map,
          icon: youAreHere,
        });
      }

      Object.entries(this.category.businesses).forEach(
        ([key, value], index) => {
          this.businessItem =
            '[{ lat: ' +
            value.lat +
            ', lng: ' +
            value.long +
            "}, '" +
            value.name +
            "']";
          const businessMarker = new google.maps.Marker({
            position: new google.maps.LatLng(
              parseFloat(value.lat),
              parseFloat(value.long),
            ),
            map,
            label: value.id
          });
        }
      );

    });
  }

  public loadMap() {

    this.loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: { lat: this.lat, lng: -106.633137 },
        zoom: this.zoom,
        minZoom: this.zoom,
        maxZoom: this.zoom + 3,
        mapTypeId: 'satellite',
        restriction: {
          latLngBounds: {
            north: 48.245378,
            south: 48.165985,
            east: -106.552094,
            west: -106.680808,
          },
        },
        styles: [
          {
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road.local',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road.local',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
        ],
        disableDefaultUI: true,
      });

      const youAreHere = 'https://i.postimg.cc/fT7T3Fz5/youarehere.png';

      const youAreHerePin = new google.maps.Marker({
        position: { lat: this.lat, lng: this.long },
        map,
        icon: youAreHere,
      });
    });
  }
}
