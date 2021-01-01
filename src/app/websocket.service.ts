import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private WEATHER_WEB_SOCKET = "http://localhost:3000/weather";
  private socket: any;

    constructor() {
      this.socket = io(this.WEATHER_WEB_SOCKET);
    }

  //WEATHER HANDLER
  onNewMessage(){
    return Observable.create( (observer: any) => {
      console.log(this.socket);
      this.socket.on('weather', (weatherData: any) => {
        observer.next(weatherData);
      });
    });
  }
}
