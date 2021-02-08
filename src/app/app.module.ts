import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessagePanelComponent } from './message-panel/message-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageItemComponent,
    MessagePanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
