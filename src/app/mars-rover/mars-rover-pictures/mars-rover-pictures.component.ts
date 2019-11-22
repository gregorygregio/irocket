import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/services/nasa.service';
import { Camera } from 'src/app/models/camera';
import { Photo } from 'src/app/models/photo';
import { MatDialog } from '@angular/material';
import { MarsPictureDialog } from '../dialogs/mars-picture-dialog/mars-picture-dialog.component';
import { map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-mars-rover-pictures',
  templateUrl: './mars-rover-pictures.component.html',
  styleUrls: ['./mars-rover-pictures.component.css']
})
export class MarsRoverPicturesComponent implements OnInit {

  selectedCamera: string;
  public readonly roverCameras$ = this.service.roverCameras$;


  private roverCameraPicturesSearch = new BehaviorSubject<string>('');
  public readonly roverCameraPictures$ = combineLatest(this.service.roverCameraPictures$, this.roverCameraPicturesSearch.asObservable())
      	                  .pipe(
                            map( ([photos, search]) => photos.filter( (photo: Photo) => photo.id.toString().includes(search)) )
                          );

  constructor(
    private service: NasaService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.service.selectedCamera$
      .subscribe( selectedCamera => this.selectedCamera = selectedCamera)
  }

  selectCamera(camera: Camera) {
    this.service.selectCamera(camera);
  }

  selectPhoto(photo: Photo) {
    this._dialog.open(MarsPictureDialog, {
      width: '720px',
      data: { url: photo.img_src }
    })
  }


  setSearch(search: string) {
    this.roverCameraPicturesSearch.next(search);
  }

}
