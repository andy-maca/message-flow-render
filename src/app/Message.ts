import { EventEmitter } from '@angular/core';

export abstract class Message {
  public isSystemMessage = false;

  // render any type of message with html
  public abstract render(): string;

  // if sender is nil, consider as system message
  constructor(public sender: string | null = null) {
    this.isSystemMessage = !sender;
  }
}
