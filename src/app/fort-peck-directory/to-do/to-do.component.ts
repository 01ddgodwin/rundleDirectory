import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  things = [
    { id: 1, name: "Fort Peck Theatre" },
    { id: 2, name: "Fort Peck Interpretive Center" },
    { id: 3, name: "First Dredge Swimming Area" },
    { id: 4, name: "Second Dredge Swimming Area" },
    { id: 5, name: "Fort Peck Dam Historical Marker" },
    { id: 6, name: "Lewis & Clark Observation Point" },
    { id: 7, name: "Fort Peck Spillway Observation Point" },
    { id: 8, name: "Wildlife Pasture" },
    { id: 9, name: "The Fortress Disc Golf Course" },
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
        [{ lat: 48.00750025376969, lng: -106.4504097673394 }, "Fort Peck Theatre"],
        [{ lat: 48.00974536385673, lng: -106.42140127240101 }, "Fort Peck Interpretive Center"],
        [{ lat: 48.02189527521055, lng: -106.44716185030994 }, "First Dredge Swimming Area"],
        [{ lat: 48.035366153158634, lng: -106.44297337560249 }, "Second Dredge Swimming Area"],
        [{ lat: 48.009913246111275, lng: -106.39103203294904 }, "Fort Peck Dam Historical Marker"],
        [{ lat: 48.02895095950835, lng: -106.31948021364349 }, "Lewis & Clark Observation Point"],
        [{ lat: 48.02397244521837, lng: -106.35421315117246 }, "Fort Peck Spillway Observation Point"],
        [{ lat: 48.00940421908485, lng: -106.46308272347775 }, "Wildlife Pasture"],
        [{ lat: 48.00812662027809, lng: -106.43188829542558 }, "The Fortress Disc Golf Course"],
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
