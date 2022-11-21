import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { directory1Categories } from 'src/data/directory1Categories';
import { Category } from '../../categories.model';
import { CityDirectoryService } from '../../city-directory.service';
import { Loader } from '@googlemaps/js-api-loader';
import { Router, Route, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() category!: Category
  @Input() index!: number;
  @Output() categorySelected = new EventEmitter<void>();

  mySubscription: any;

  businessItem: any = this.cityDirectory.selectedCategoryItems;

  // This is the zoom amount for Google Maps and the API key
  zoom = 13;
  loader = new Loader({
    apiKey: 'AIzaSyCtkj02rgOrKheWUYs9SAIYPfh7kXr-zV0'
  })

  lat: any;
  long: any;
  mapType!: string;
  

  constructor(
    private cityDirectory: CityDirectoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    console.log("Category Item")

    // This will use the coordinates for the center of the map depending on which directory was chosen
    if (this.router.url.includes('directory1')) {
      this.lat = 48.19379866606058;
      this.long = -106.63712638349855
    } else if (this.router.url.includes('directory2')) {
      this.lat = 48.0086631782855;
      this.long = -106.44714927464477;
    }


    // This will load the map category when the page is first loaded
    if (this.router.url.includes('map')) {
      this.onSelectedCategory()      
      this.mapType = "hybrid"
    } else {
      this.mapType = "satellite"
      this.onSelectedCategory()
    }

  }


  // This will grab the data from the category that was chosen and display the map with all of the businesses from that category
  onSelectedCategory() {

    this.categorySelected.emit();    

    this.cityDirectory.selectedCategoryItems = this.businessItem

    Object.entries(this.category.businesses).forEach(([key, value], index) => {
      this.businessItem =
        '[{ lat: ' +
        value.lat +
        ', lng: ' +
        value.long +
        "}, '" +
        value.name +
        "']";
    });

    this.loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: { lat: this.lat, lng: this.long },
        zoom: this.zoom,
        minZoom: this.zoom,
        maxZoom: this.zoom + 4,
        mapTypeId: this.mapType,
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

  

}