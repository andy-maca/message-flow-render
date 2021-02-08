import { Component } from '@angular/core';
import { ImageMessage } from './ImageMessage';
import { TextMessage } from './TextMessage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'message-renderer';
  users = ['andy', 'tommy', 'eric'];
  currentUser = 'andy'; // current real user
  selectedUser = 'andy'; // mock message for user
  newMessage = '';

  messages = [
    new TextMessage('hi', 'andy'),
    new TextMessage('Good morning', 'tommy'),
    new TextMessage('hello everyone', 'eric'),
    new TextMessage('\'andy\' 撤回了一条消息', null),
    new TextMessage('message\nwrapped', 'eric'),
    new TextMessage('<script>alert(1)</script>test xss', 'eric'),
    new ImageMessage('https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/10/P4ojpwNDSTaIK3lbkCEq_ng2-styling-techniques.jpg', 'andy')
  ];

  mockUserMessage(value: string): void {
    if (value) {
      this.messages.push(new TextMessage(value, this.selectedUser));
      this.newMessage = '';
    }
  }

  mockSystemMessage(value: string): void {
    if (value) {
      this.messages.push(new TextMessage(value, null));
      this.newMessage = '';
    }
  }

}
