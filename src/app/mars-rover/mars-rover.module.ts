import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarsRoverRoutingModule } from './mars-rover-routing.module';
import { MarsRoverPicturesComponent } from './mars-rover-pictures/mars-rover-pictures.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MarsPictureDialog } from './dialogs/mars-picture-dialog/mars-picture-dialog.component';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [MarsRoverPicturesComponent, MarsPictureDialog],
  imports: [
    CommonModule,
    MarsRoverRoutingModule,

    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDialogModule

  ],
  entryComponents: [
    MarsPictureDialog
  ]
})
export class MarsRoverModule { }
