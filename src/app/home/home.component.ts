import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Station } from '../station.model';
import { StationService } from '../station.service';
import { Post } from '../post.model';
import { PostService } from '../post.service';

import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stationNames: string[] =[];
  defaultStation: string = "default";
  stationForm!: FormGroup;
  currentStation!: string;

  constructor(
    private stationService: StationService,
    private postService: PostService) {}

  ngOnInit(){
    this.stationForm = new FormGroup({
      'Station': new FormControl(this.defaultStation)
    });
    this.selectPageUAVs();
  }

  selectPageUAVs(){
    this.stationService.fetchStationNames().subscribe(stationNames => {
      this.stationNames = stationNames;
    })
  }

  setStation(){
    console.log(this.stationForm.get('Station')?.value);
    this.currentStation = this.stationForm.get('Station')?.value;
  }


}
