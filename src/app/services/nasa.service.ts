import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { shareReplay, switchMap, distinctUntilChanged, tap, map } from 'rxjs/operators';
import { PictureOfTheDay } from '../models/picture-of-the-day';
import { environment } from 'src/environments/environment';
import { of, Observable, Subject } from 'rxjs';
import { Camera } from '../models/camera';
import { Photo } from '../models/photo';


const { api } = environment


@Injectable()
export class NasaService {

    public readonly pictureOfTheDay$ = this.http.get<PictureOfTheDay>(`${api}/planetary/apod`)
                            .pipe(
                                shareReplay()
                            );


    private _roverCameraSelected = new Subject<string>();

    public readonly selectedCamera$ = this._roverCameraSelected.asObservable();

    public readonly roverCameraPictures$ = this.selectedCamera$
                                    .pipe(
                                        distinctUntilChanged(),
                                        switchMap( camera => 
                                            this.http.get<{ photos: Photo[] }>(`${api}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&page=1`)
                                        ),
                                        map( response => response.photos instanceof Array ? response.photos : Object.values(response.photos) ),
                                        shareReplay()
                                    )
    
    public readonly roverCameras$: Observable<Camera[]> = of([
        { name: 'NAVCAM', full_name: 'Navigation Camera' },
        { name: 'MARDI', full_name: 'Mars Descent Imager' }, 
        { name: 'CHEMCAM', full_name: 'Chemistry and Camera Complex' },
        { name: 'MAST', full_name: 'MAST' },
        { name: 'RHAZ', full_name: 'Rear Hazard Avoidance Camera' },
        { name: 'FHAZ', full_name: 'Front Hazard Avoidance Camera' }
    ]);
    
    constructor(
        private http: HttpClient
    ) {}


    selectCamera(camera: Camera) {
        this._roverCameraSelected.next(camera.name);
    }


}