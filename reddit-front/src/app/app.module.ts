import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdsComponent } from './ads/ads.component';
import { SubmitBoxComponent } from './submit-box/submit-box.component';
import { PostsComponent } from './posts/posts.component';
import { CommunityComponent } from './community/community.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdsComponent,
    SubmitBoxComponent,
    PostsComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
