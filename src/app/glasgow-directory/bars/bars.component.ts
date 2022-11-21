import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  bars = [
    { id: 1, name: "Oasis Lounge Eatery & Casino" },
    { id: 2, name: "Busted Knuckle Brewery" },
    { id: 3, name: "Stockmans Bar" },
    { id: 4, name: "Alley's Palace" },
    { id: 5, name: "Sam and Jeffs" },
    { id: 6, name: "DB's Bar and Casino" },
    { id: 7, name: "Dinks Bar" },
    { id: 8, name: "The Wood" },
    { id: 9, name: "Durum" },
    
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
        [{ lat: 48.19345474809056, lng: -106.637096791117 }, "Oasis Lounge Eater & Casino"],
        [{ lat: 48.19373341983406, lng: -106.63378394077647 }, "Busted Knuckle Brewery"],
        [{ lat: 48.19405802827256, lng: -106.63423660892798 }, "Stockmans Bar"],
        [{ lat: 48.19437074144575, lng: -106.63520061508798 }, "Alley's Palace"],
        [{ lat: 48.19540822510853, lng: -106.63228638843782 }, "Sam and Jeffs"],
        [{ lat: 48.195129998709334, lng: -106.63058936714594 }, "DB's Bar and Casino"],
        [{ lat: 48.195701282837646, lng: -106.62353172536685 }, "Dinks Bar"],
        [{ lat: 48.193870601922455, lng: -106.62344178526375 }, "The Wood"],
        [{ lat: 48.19881811369263, lng: -106.6408882115083 }, "Durum"],
        
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
