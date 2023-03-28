import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UavInputComponent } from './uav-input/uav-input.component';
import { MapsComponent } from './maps/maps.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { StationsComponent } from './stations/stations.component';
import { UavInterfaceComponent } from './home/uav-interface/uav-interface.component';
import { HeaderComponent } from './home/uav-interface/header/header.component';
import { VideoFeedComponent } from './home/uav-interface/video-feed/video-feed.component';
import { UavControlsComponent } from './home/uav-interface/uav-controls/uav-controls.component';
import { VideoControlsComponent } from './home/uav-interface/video-controls/video-controls.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'uavInput', component: UavInputComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'stations', component: StationsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UavInputComponent,
    MapsComponent,
    MessagesComponent,
    HomeComponent,
    StationsComponent,
    UavInterfaceComponent,
    HeaderComponent,
    VideoFeedComponent,
    UavControlsComponent,
    VideoControlsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
