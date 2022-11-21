import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.scss']
})
export class GasComponent implements OnInit {
  stations = [
    { id: 1, name: 'Holiday' },
    { id: 2, name: 'Conoco Midtown' },
    { id: 3, name: 'Conoco Westend' },
    { id: 4, name: 'Agland' }
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
        [{ lat: 48.19545760391171, lng: -106.62939168990985 }, 'Holiday'],
        [{ lat: 48.19565904011531, lng: -106.63067415027149 }, 'Conoco Midtown'],
        [{ lat: 48.20966705555708, lng: -106.64127614934456 }, 'Conoco Westend',],
        [{ lat: 48.19653365275049, lng: -106.63368566044869 }, 'Agland'],
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
