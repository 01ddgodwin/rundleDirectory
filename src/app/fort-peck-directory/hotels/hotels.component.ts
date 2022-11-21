import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  hotels = [
    { id: 1, name: "Fort Peck Hotel" },
    { id: 2, name: "Duck Creek Campground" },
    { id: 3, name: "West End Tent and Trailer Campground" },
    { id: 4, name: "Fort Peck Marina and RV Park" },
    { id: 5, name: "Fort Peck Campground" },
    { id: 6, name: "Downstream Campground" },
    { id: 7, name: "Roundhouse Point Campgrond" },
    { id: 8, name: "Flat Lake Recreation Area" },
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
        [{ lat: 48.00899496165245, lng: -106.44698230067488 }, "Fort Peck Hotel"],
        [{ lat: 47.98361101977452, lng: -106.520532240931 }, "Duck Creek Campground"],
        [{ lat: 47.99492958032721, lng: -106.49792601858154 }, "West End Tent and Trailer Campground"],
        [{ lat: 47.99531459295372, lng: -106.488797823624 }, "Fort Peck Marina and RV Park"],
        [{ lat: 47.998728514614385, lng: -106.48005842882954 }, "Fort Peck Campground"],
        [{ lat: 48.00821550130469, lng: -106.42862659559091 }, "Downstream Campground"],
        [{ lat: 48.02422266804703, lng: -106.44107644534502 }, "Roundhouse Point Campground"],
        [{ lat: 48.017880224355444, lng: -106.36995885542176 }, "Flat Lake Recreation Area"],
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
