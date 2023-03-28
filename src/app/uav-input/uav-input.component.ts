import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Station } from '../station.model';
import { StationService } from '../station.service';



@Component({
  selector: 'app-uav-input',
  templateUrl: './uav-input.component.html',
  styleUrls: ['./uav-input.component.css']
})
export class UavInputComponent implements OnInit {
  isFetchingUAVPosts: boolean = false;
  isFetchingStationNames: boolean = false;
  loadedUAVs: Post[] = [];
  stationNames: string[] = [];

  constructor(
    private postService: PostService,
    private stationService: StationService) {}

  defaultStation: string = "default";

  ngOnInit(): void {
    this.onFetchUAVPosts();
    this.onFetchStationNames();
  }

  onCreateUAVPost(postData: Post) {
    this.postService.createAndStoreUAVPost(postData.name, postData.batteryPercentage, postData.station);
  }

  onFetchUAVPosts() {
    this.isFetchingUAVPosts = true;
    this.postService.fetchUAVPosts().subscribe(posts => {
      this.isFetchingUAVPosts = false;      
      this.loadedUAVs = posts;
    });
  }

  onFetchStationNames() {
    this.isFetchingStationNames = true;
    this.stationService.fetchStationNames().subscribe(stationNames => {
      this.isFetchingStationNames = false;
      this.stationNames = stationNames;
    });
    //console.log(this.stationNames[1]);
  }

}
