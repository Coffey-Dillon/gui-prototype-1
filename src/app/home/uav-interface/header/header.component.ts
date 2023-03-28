import { Component, Input, OnInit } from '@angular/core';

import { PostService } from '../../../post.service';
import { StationService } from '../../../station.service';
import { Station } from '../../../station.model';
import { Post } from '../../../post.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  stationNames: string[] = [];
  uavs: Post[] = [];
  defaultuav: string = "default";
  @Input() currStation = '';
  uavSelectForm!: FormGroup;
  currUav!: Post;

  constructor(
    private postService: PostService,
    private stationService: StationService) { }

  ngOnInit(): void {
    this.fetchUAVs();
    this.uavSelectForm = new FormGroup ({
      'UAV': new FormControl(this.defaultuav)
    });
  }

  fetchUAVs(): void {
    this.postService.fetchUAVPosts().subscribe(uavs => {
      this.uavs = uavs;
    })
  }

  setCurrUav(): void {
    this.currUav = this.uavSelectForm.get('UAV')?.value;
    console.log(this.currUav)
  }

}
