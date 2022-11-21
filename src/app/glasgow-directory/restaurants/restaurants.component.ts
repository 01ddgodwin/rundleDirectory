import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  restaurants = [
    { id: 1, name: 'Soma Dis Deli', logo: "../../assets/restaurantLogos/somaDis.jpg" },
    { id: 2, name: 'Oasis Lounge Eatery & Casino', logo: "" },
    { id: 3, name: 'Durum', logo: "" },
    { id: 4, name: 'Eugenes Pizza', logo: "../../assets/restaurantLogos/eugenesPizza.jpg" },
    { id: 5, name: "DB's Bar and Casino", logo: "" },
    { id: 6, name: 'Flip Burgers and Treats', logo: "../../assets/restaurantLogos/flip.jpg" },
    { id: 7, name: 'The Wood', logo: "../../assets/restaurantLogos/theWood.png" },
    { id: 8, name: "Toodie's Cafe & Gallery", logo: "../../assets/restaurantLogos/toodies.jpg" },
    { id: 9, name: 'Taco Shack', logo: "" },
    { id: 10, name: "Sam and Jeff's", logo: "../../assets/restaurantLogos/samAndJeffs.jpg" },
    { id: 11, name: "McDonald's", logo: "../../assets/restaurantLogos/mc.png" },
    { id: 12, name: "Dairy Queen", logo: "../../assets/restaurantLogos/dairyQueen.png" },
    { id: 13, name: "Dinks Bar", logo: "" },
    { id: 14, name: "Subway", logo: "../../assets/restaurantLogos/subway.png" },
    { id: 15, name: "Pizza Hut", logo: "../../assets/restaurantLogos/pizzaHut.jpg" },
    { id: 16, name: "The Apple Trolley", logo: "../../assets/restaurantLogos/appleTrolley.png" },
  ];

  

  constructor() {}

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
            featureType:  "road.local",
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType:  "road.local",
            stylers: [
              {
                visibility: 'off',
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
        [{ lat: 48.19390912079178, lng: -106.63703727600777 }, 'Soma Dis Deli'],
        [{ lat: 48.193403813659266, lng: -106.63708898264504 }, 'Oasis Lounge Eater & Casino'],
        [{ lat: 48.19889585304371, lng: -106.64088547295601 }, 'Durum'],
        [{ lat: 48.19450197982574, lng: -106.63029242212613 }, 'Eugenes Pizza'],
        [{ lat: 48.195136393117586, lng: -106.63060942090813 }, "DB's Bar and Casino"],
        [{ lat: 48.20534424799341, lng: -106.64086901776302 }, 'Flip Burgers and Treats'],
        [{ lat: 48.19386950265014, lng: -106.62329392899977 }, 'The Wood'],
        [{ lat: 48.193041459191946, lng: -106.6344708504982 }, "Toodie's Cafe & Gallery"],
        [{ lat: 48.19776807874728, lng: -106.6394712483472 }, 'Taco Shack'],
        [{ lat: 48.19538274827874, lng: -106.63224416236692 }, "Sam and Jeff's"],
        [{ lat: 48.19612837790444, lng: -106.6352480657017 }, "McDonald's"],
        [{ lat: 48.196565624321465, lng: -106.63653241375253 }, 'Dairy Queen'],
        [{ lat: 48.195779463709, lng: -106.62345097312345 }, 'Dinks Bar'],
        [{ lat: 48.19688907576292, lng: -106.63751216220918  }, 'Subway'],
        [{ lat: 48.196827029631784, lng: -106.63720606491053 }, 'Pizza Hut'],
        [{ lat: 48.1978165109543, lng: -106.63798935492862 }, 'The Apple Trolley'],
      ];

      const infoWindow = new google.maps.InfoWindow();

      hotelPoints.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
          position,
          map,
          title: `${i + 1}. ${title}`,
          label: `${i + 1}`,
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
