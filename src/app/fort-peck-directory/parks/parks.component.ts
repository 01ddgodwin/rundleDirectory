import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss']
})
export class ParksComponent implements OnInit {
  parks = [
    { id: 1, name: "West End Playground" },
    { id: 2, name: "Northeast Montana Veterans Memorial Park" },
    { id: 3, name: "Osage Circle Park" },
    { id: 4, name: "Kiwanis Playground West" },
    { id: 5, name: "Kiwanis Playground East" },
    { id: 6, name: "First Dredge Playground" },
  ];

  constructor() { }

  ngOnInit(): void {
    let zoom = 10;
    let loader = new Loader({
      apiKey: 'AIzaSyCtkj02rgOrKheWUYs9SAIYPfh7kXr-zV0',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: { lat: 48.0086631782855, lng: -106.44714927464477 },
        zoom,
        minZoom: 5,
        maxZoom: zoom + 8,
        mapTypeId: 'satellite',
        restriction: {
          latLngBounds: {
            north: 48.08241435525823,
            south: 47.96957410183542,
            east: -106.28541204108711,
            west: -106.59180182196943,
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
        [{ lat: 47.99528323729456, lng: -106.48471321408692 }, "West End Playground"],
        [{ lat: 48.00933114292966, lng: -106.44869555169998 }, "Northeast Montana Veterans Memorial park"],
        [{ lat: 48.01284383263892, lng: -106.4492421977965 }, "Osage Circle Park"],
        [{ lat: 48.007184997671914, lng: -106.43078390236025 }, "Kiwanis Playground West"],
        [{ lat: 48.00754980161806, lng: -106.42665267965752 }, "Kiwanis Playground East"],
        [{ lat: 48.02136581053848, lng: -106.44700198388881 }, "First Dredge Playground"],
        
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
