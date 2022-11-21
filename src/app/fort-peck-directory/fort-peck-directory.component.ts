import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { directory2Categories } from 'src/data/directory2Categories';

@Component({
  selector: 'app-fort-peck-directory',
  templateUrl: './fort-peck-directory.component.html',
  styleUrls: ['./fort-peck-directory.component.scss']
})
export class FortPeckDirectoryComponent implements OnInit {

  categories = directory2Categories

  constructor() { }

  ngOnInit(): void {
    let zoom = 15;
    let loader = new Loader({
      apiKey: 'AIzaSyCtkj02rgOrKheWUYs9SAIYPfh7kXr-zV0',
    });

    loader.load().then(() => {
      new google.maps.Map(document.getElementById('map')!, {
        center: { lat: 48.199003, lng: -106.633137 },
        zoom,
        minZoom: zoom,
        maxZoom: zoom + 3,
        restriction: {
          latLngBounds: {
            north: 48.245378,
            south: 48.165985,
            east: -106.552094,
            west: -106.680808,
          },
        },
        disableDefaultUI: true,
      });
    });
  }

}
