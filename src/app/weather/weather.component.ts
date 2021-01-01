import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../websocket.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
    private websocketService: WebSocketService,
  ) { }

  private weatherOnCities:any = [];

  ngOnInit(): void {
    this.websocketService.onNewMessage().subscribe( (weatherData:any) => {
      this.weatherOnCities = weatherData;
      console.log(weatherData);
    });

  }
}
