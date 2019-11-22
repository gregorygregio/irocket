import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Camera } from 'src/app/models/camera';

@Component({
  selector: 'app-camera-selection-list',
  templateUrl: './camera-selection-list.component.html',
  styleUrls: ['./camera-selection-list.component.css']
})
export class CameraSelectionListComponent  {

  
  @Input() selectedCamera: string;
  @Input() roverCameras: Camera[];
  @Output() cameraSelected = new EventEmitter();

  isCameraSelected(camera: Camera) {
    return camera.name === this.selectedCamera;
  }

  onSelectCamera(camera: Camera) {
    this.cameraSelected.emit({ camera })
  }
}
