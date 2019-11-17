import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarsRoverPicturesComponent } from './mars-rover-pictures/mars-rover-pictures.component';


const routes: Routes = [ 
  { path: '', children: [
      { path: '', component: MarsRoverPicturesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarsRoverRoutingModule { }
