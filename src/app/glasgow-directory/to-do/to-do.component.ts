import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  things = [
    { id: 1, name: 'Valley County Pioneer Museum' },
    { id: 2, name: "Glasgow City-County Library" },
    { id: 3, name: "Valley Cinemas" },
    { id: 4, name: "Childrens Museum of NE Montana" },
    { id: 5, name: "Glasgow Civic Center" },    
    { id: 6, name: "Glasgow Swimming Pool" },
    { id: 7, name: "Sunnyside Golf & Country Club" },
    { id: 8, name: "Hi-Tech Golf" },
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
        [{ lat: 48.20452623538724, lng: -106.64066472189624 }, "Valley County Pioneer Museum"],
        [{ lat: 48.19288350946855, lng: -106.63626393125053 }, "Glasgow City-County Library"],
        [{ lat: 48.19468595016301, lng: -106.63830007445056 }, "Valley Cinemas"],
        [{ lat: 48.19427048414927, lng: -106.63717599644512 }, "Childrens Museum of NE Montana"],
        [{ lat: 48.191694953908225, lng: -106.63456864724567 }, "Glasgow Civic Center"],
        [{ lat: 48.190945166129424, lng: -106.63532786555875 }, "Glasgow Swimming Pool"],
        [{ lat: 48.22776294218193, lng: -106.64337007524028 }, "Sunnyside Golf & Country Club"],
        [{ lat: 48.19239345667557, lng: -106.63646935607211 }, "Hi-Tech Golf"],
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
