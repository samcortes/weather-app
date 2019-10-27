import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeather(city) {
    return this.http.get('https://api.weatherstack.com/current?access_key=10ba8d61dc7a9e9f32ce82b4da5d1ce4&query=' + city);
  }

  getLocation() {
    return this.http.get('https://api.ipdata.co/?api-key=test');
  }
}
