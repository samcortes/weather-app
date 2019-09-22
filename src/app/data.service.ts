import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeather(city) {
    return this.http.get('https://api.apixu.com/v1/forecast.json?key=8041f04fc47f4a438ff111127191903&q=' + city + '&days=14');
  }

  getLocation() {
    return this.http.get('https://api.ipdata.co/?api-key=test');
  }
}
