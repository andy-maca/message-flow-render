import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../Message';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.less']
})
export class MessagePanelComponent implements OnInit {
  @Input()
  currentUser!: string;

  @Input()
  messages: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
