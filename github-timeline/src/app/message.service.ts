import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

@Injectable()
export class MessageService {
  id = 0;

  private subject = new Subject<any>();

  constructor() { }

  showMessage(data) {
    this.subject.next({message: data.message, id: this.id++});
  }

  onMessage() {
    return this.subject.asObservable();
  }
}
