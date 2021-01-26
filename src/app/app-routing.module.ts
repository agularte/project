import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientChatComponent } from './client-chat/client-chat.component';
import { GeneralComponent } from './general/general.component';
import { InternalProjectsComponent } from './internal-projects/internal-projects.component';
import { LoginComponent } from './login/login.component';
import { MarketingComponent } from './marketing/marketing.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent
  },
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'internal-projects',
    component: InternalProjectsComponent
  },
  {
    path: 'marketing',
    component: MarketingComponent
  },
  {
    path: 'random',
    component: RandomComponent
  },
  {
    path: 'client-chat',
    component: ClientChatComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
