import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import { Station } from "./station.model";

@Injectable({ providedIn: "root" })
export class StationService {

    constructor(private http: HttpClient) {}

    createAndStoreStation( name: string, status: string ) {
        const stationData: Station = {name: name, status: status};
        this.http.post<{ name: string }>(
            'https://uav-http-practice-default-rtdb.firebaseio.com/stations.json',
            stationData)
            .subscribe(responseData => 
                {console.log(responseData);
            });
    }

    fetchStations(){
        return this.http
            .get<{ [key: string]: Station }>(
            'https://uav-http-practice-default-rtdb.firebaseio.com/stations.json')
            .pipe(map((responseData: { [key: string]: Station }) => {
                const stationsArray: Station[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        stationsArray.push({ ...responseData[key], id: key });
                    }
                }
                return stationsArray;
            })); 
    }

    fetchStationNames(){
        return this.http
            .get<{ [key: string]: Station }>(
            'https://uav-http-practice-default-rtdb.firebaseio.com/stations.json')
            .pipe(map((responseData: { [key: string]: Station }) => {
                const stationNamesArray: string[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        stationNamesArray.push(responseData[key].name);
                        console.log(responseData[key].name);
                    }
                }
                return stationNamesArray;
            }));
    }
}