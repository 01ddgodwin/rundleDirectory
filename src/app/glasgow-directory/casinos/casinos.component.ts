import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-casinos',
  templateUrl: './casinos.component.html',
  styleUrls: ['./casinos.component.scss']
})
export class CasinosComponent implements OnInit {
  casinos = [
    { id: 1, name: "Northern Lights Casino" },
    { id: 2, name: "Aces & 8's Casino" },
    { id: 3, name: "Oasis Lounge Eatery & Casino" },
    { id: 4, name: "DB's Bar and Casino" },
  ];

  constructor() { }

  ngOnInit(): void {
    let zoom = 15;
    let loader = new Loader({
      apiKey: 'AIzaSyCtkj02rgOrKheWUYs9SAIYPfh7kXr-zV0',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: { lat: 48.199003, lng: -106.633137 },
        zoom,
        minZoom: zoom,
        maxZoom: zoom + 3,
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
            featureType: 'administrative.land_parcel',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'administrative.neighborhood',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.icon',
            stylers: [
              {
                color: '#ffffff',
              },
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text',
            stylers: [
              {
                color: '#ffffff',
              },
            ],
          },
        ],
        disableDefaultUI: true,
      });

      const youAreHere = "https://i.postimg.cc/fT7T3Fz5/youarehere.png";

      const youAreHerePin = new google.maps.Marker({
        position: { lat: 48.19379866606058, lng: -106.63712638349855 },
        map,
        icon: youAreHere,
      });

      const hotelPoints: [google.maps.LatLngLiteral, string][] = [
        [{ lat: 48.20568269745068, lng: -106.6417481851553 }, "Northern Lights Casino"],
        [{ lat: 48.19063321011542, lng: -106.6099544184689 }, "Aces & 8's Casino"],
        [{ lat: 48.19345799562055, lng: -106.63708723560165 }, "Oasis Lounge Eatery & Casino"],
        [{ lat: 48.19513495214892, lng: -106.63064809744895 }, "DB's Bar and Casino"],
      ];

      const infoWindow = new google.maps.InfoWindow();

      hotelPoints.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
          position,
          map,
          title: `${i + 1}. ${title}`,
          label: {
            text: `${i + 1}`,
            // className: "marker-label",
            // color: "#ffffff",
          },
          optimized: false,
        });

        marker.addListener('click', () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      });
    });
  }

}
