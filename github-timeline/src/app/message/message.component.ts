import { Component, OnInit, Renderer2 } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  alerts: any[] = [];
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.onMessage()
      .subscribe(alert => {
        if (!alert.message) {
          this.alerts = [];

          return;
        }
        this.alerts.push(alert);
        this.hideMessage(alert);
      });
  }

  hideMessage(alert) {
    setTimeout(() => this.removeAlert(alert), 2000);
  }

  removeAlert(alert: any) {
    this.alerts = this.alerts.filter(x => x.id !== alert.id);
  }
}
