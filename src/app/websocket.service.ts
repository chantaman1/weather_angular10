import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

    constructor(private socket: Socket) { }

  //WEATHER HANDLER
  public onNewMessage = () => {
    return Observable.create( (observer: any) => {
      console.log(this.socket);
      this.socket.on('weather', (weatherData: any) => {
        observer.next(weatherData);
      });
    });
  }
}
