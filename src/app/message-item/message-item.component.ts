import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Message } from '../Message';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MessageItemComponent implements AfterViewInit {

  @Input()
  message!: Message;

  @ViewChild('slot', {static: true})
  slotElement!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngAfterViewInit(): void {
    this.slotElement.nativeElement.scrollIntoView();
  }
}
