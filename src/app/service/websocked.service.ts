import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsockedService {
  private _socket!: WebSocket;
  private _messageSubject: Subject<string> = new Subject<string>();

  constructor() { }

  public connect(url: string): void {
    this._socket = new WebSocket(url);

    this._socket.onmessage = (event: MessageEvent<any>) => {
      this._messageSubject.next(event.data);
    }

    this._socket.onclose = (event: CloseEvent) => {
      console.log("WebSocket connection is closed", event);
    }

    this._socket.onerror = (event) => {
      console.log("There was an error in web socked comunication");
    }
  }

  public sendMessage(message: string): void {
    if(this._socket.readyState === WebSocket.OPEN) {
      this._socket.send(message);
    } else {
      console.error('WebSocked is not connected');
    }
  }

  public getMessages(): Observable<string> {
    return this._messageSubject.asObservable();
  }
}
