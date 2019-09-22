import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weather: any;
  location: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getLocation();

  }

  getLocation() {
    this.data.getLocation().subscribe(data => {
      this.location = data;
      this.getWeatherForecast(this.location.city);
    });
  }


  getWeatherForecast(city) {
    this.data.getWeather(city).subscribe(data => {
      this.weather = data;
      this.weather.forecast.forecastday.map(forecast => {
        forecast.date = this.parseDate(forecast.date);
      });
    });
  }

  parseDate(date) {
    return new Date(date).toDateString();
  }

}
