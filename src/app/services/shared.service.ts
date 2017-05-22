import { EventEmitter, Injectable } from '@angular/core';


@Injectable()
export class SharedService {

  private emitter: EventEmitter<any>;

  constructor() {
    this.emitter = new EventEmitter<any>();
  }

  getEmitter(): EventEmitter<any> {
    return this.emitter;
  }

  emit(data: any): void {
    this.emitter.emit(data);
  }

}
