import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { GeneralComponent } from './general/general.component';
import { RandomComponent } from './random/random.component';
import { ClientChatComponent } from './client-chat/client-chat.component';
import { InternalProjectsComponent } from './internal-projects/internal-projects.component';
import { MarketingComponent } from './marketing/marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    GeneralComponent,
    RandomComponent,
    ClientChatComponent,
    InternalProjectsComponent,
    MarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
