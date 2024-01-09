import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WebsockedService } from './service/websocked.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'pinterest-replica-frontend';

  public responseFromWebSocket$: Observable<string> = this._webSocketService.getMessages();

  public term: string = '';

  public constructor(private readonly _webSocketService: WebsockedService){
    this._webSocketService.connect("wss://socketsbay.com/wss/v2/1/demo/");
  }

  public sendMessage() {
    this._webSocketService.sendMessage(this.term);
  }


}
