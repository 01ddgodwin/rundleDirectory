import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval, Subscription, timer } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Variables needed to get and display the current temperature
  currentTemp: any;
  currentWeatherIcon: any;
  currentFeelsLike: any;
  currentDescription: any;
  timerSubscription!: Subscription;
  headers = new HttpHeaders({});

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // This will load in the temperature and icon when the page loads
    this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?lat=48.200273&lon=-106.648191&appid=32e5e3cba6b23d38c546ab8be03f4c1b&units=imperial', {
      headers: this.headers
    }).subscribe(data => {
      console.log(data)
      this.currentTemp = Math.round(data.main.temp)
      this.currentWeatherIcon = data.weather[0].icon
      this.currentFeelsLike = Math.round(data.main.feels_like)
    })

    // Afer how many seconds the function will run
    const seconds = interval(10000)

    // This will run the getTemp function after the amount of time given
    seconds.subscribe((d) => {
      this.getTemp()
    })

  }
  
  // This will get the current temperature from the Open Weather API and display it in the header
  getTemp() {
    this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?lat=48.200273&lon=-106.648191&appid=32e5e3cba6b23d38c546ab8be03f4c1b&units=imperial', {
      headers: this.headers
    }).subscribe(data => {
      console.log(data)
      this.currentTemp = Math.round(data.main.temp)
      this.currentWeatherIcon = data.weather[0].icon
      this.currentFeelsLike = Math.round(data.main.feels_like)
    })
  }

}
