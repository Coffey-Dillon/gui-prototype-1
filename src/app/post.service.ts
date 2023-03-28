import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostService {

    constructor( private http: HttpClient ) {}

    createAndStoreUAVPost( name: string, batteryPercentage: string, station: string ) {
        const postData: Post = { name: name, batteryPercentage: batteryPercentage, station: station};
        this.http.post<{ name: string }>(
            'https://uav-http-practice-default-rtdb.firebaseio.com/uavs.json', 
            postData)
            .subscribe(responseData => {
                console.log(responseData); 
            });
    }

    fetchUAVPosts(){
        return this.http
            .get<{ [key: string]: Post }>(
                'https://uav-http-practice-default-rtdb.firebaseio.com/uavs.json')
                .pipe(map((responseData: { [key: string]: Post}) => {
                const uavsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            uavsArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return uavsArray;
                })
            );
    }

}