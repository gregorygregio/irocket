import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';



export interface MarsPictureData {
    url: string;
}

@Component({
    selector: 'mars-picture-dialog',
    template: `
        <div mat-dialog-content>
            <img style='width: 100%' [src]="data.url" />
        </div>
    `,
    
  })
  export class MarsPictureDialog {
  
    constructor(
      public dialogRef: MatDialogRef<MarsPictureDialog>,
      @Inject(MAT_DIALOG_DATA) public data: MarsPictureData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }