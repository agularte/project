import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { RandomComponent } from './random/random.component';
import { ClientChatComponent } from './client-chat/client-chat.component';
import { InternalProjectsComponent } from './internal-projects/internal-projects.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageComponent } from './message/message.component';
import { TextboxComponent } from './textbox/textbox.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    RandomComponent,
    ClientChatComponent,
    InternalProjectsComponent,
    MarketingComponent,
    SidebarComponent,
    MessageComponent,
    TextboxComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
