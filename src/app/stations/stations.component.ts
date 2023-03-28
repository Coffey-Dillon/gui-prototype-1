import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StationService } from '../station.service';
import { Station } from '../station.model';



@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  loadedStations: Station[] = [];
  loadedStationNames: string[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private stationService: StationService) { }

  ngOnInit(): void {
  }

  onCreateStation(stationData: Station){
    this.stationService.createAndStoreStation(stationData.name, stationData.status);
  }

  onFetchStations(){
    this.isFetching = true;
    this.stationService.fetchStations().subscribe(stations => {
      this.isFetching = false;
      this.loadedStations = stations;
    });
  }

  onFetchStationNames(){
    this.isFetching = true;
    this.stationService.fetchStationNames().subscribe(stationNames => {
      this.isFetching = false;
      this.loadedStationNames = stationNames;
    });
  } 

}
