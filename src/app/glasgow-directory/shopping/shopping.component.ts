import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  shops = [
    { id: 1, name: 'Shippwrecked' },
    { id: 2, name: 'Thistle and Thread Boutique' },
    { id: 3, name: "Mary's Mercantile" },
    { id: 4, name: "Robyn's Nest Home Decor" },
    { id: 5, name: "Mixed Pieces" },
    { id: 6, name: "Western Drug" },    
    { id: 7, name: "Glasgow Flower & Gift Shop" },
    { id: 8, name: "D&G Sports & Western" },
    { id: 9, name: "Soroptomist Thrift Store" },
    { id: 10, name: "Cherry Creek Gear Shop" },
    { id: 11, name: "Red Barn Gifts" },
    { id: 12, name: "5th Avenue Pharmacy & Gifts" },
    { id: 13, name: "Albertsons" },
    { id: 14, name: "Reynolds Market" },
    { id: 15, name: "O'Reilly Auto Parts" },

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
        [{ lat: 48.19337417167068, lng: -106.63716102736207 }, 'Shippwrecked'],
        [{ lat: 48.19567860255134, lng: -106.63394130469105 }, 'Thistle and Thread Boutique'],
        [{ lat: 48.19457959310602, lng: -106.63573927382369 }, "Mary's Mercantile"],
        [{ lat: 48.19480759408854, lng: -106.63641402281235 }, "Robyn's Nest Home Decor"],
        // [{ lat: 48.19423629866415, lng: -106.63793143355528 }, 'Mixed Pieces'],
        [{ lat: 48.19431545612085, lng: -106.63808334747253 }, 'Western Drug'],
        [{ lat: 48.19368604903156, lng: -106.63631874266382 }, 'Glasgow Flower & Gift Shop'],
        [{ lat: 48.19326765191629, lng: -106.63543174616156 }, 'D&G Sports & Western'],
        [{ lat: 48.192911540650115, lng: -106.63571019836668 }, 'Soroptomist Thrift Store'],
        [{ lat: 48.1927304303299, lng: -106.63585301614812 }, 'Cherry Creek Gear Shop'],
        [{ lat: 48.19167952711173, lng: -106.62806632755075 }, 'Red Barn Gifts'],
        [{ lat: 48.18985903087559, lng: -106.63561857430787 }, '5th Avenue Pharmacy & Gifts'],
        [{ lat: 48.19747671094748, lng: -106.63669709661673 }, 'Albertsons'],
        [{ lat: 48.194744611746295, lng: -106.63082593367709 }, 'Reynolds Market'],
        [{ lat: 48.19647990852163, lng: -106.6359372057226 }, "O'Reilly Auto Parts"],
        
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
