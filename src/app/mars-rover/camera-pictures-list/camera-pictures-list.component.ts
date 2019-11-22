import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-camera-pictures-list',
  templateUrl: './camera-pictures-list.component.html',
  styleUrls: ['./camera-pictures-list.component.css']
})
export class CameraPicturesListComponent {

  @Input() roverCameraPictures: Photo[];
  @Output() photoSelected = new EventEmitter();
  @Output() searchChange = new EventEmitter();

  onSelectPhoto(photo: Photo) {
    this.photoSelected.emit({ photo });
  }

  onSearchChange(event: KeyboardEvent) {
    const search = (<HTMLInputElement>event.target).value;
    this.searchChange.emit({search});
  }

}
