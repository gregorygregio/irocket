import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { PictureOfTheDayComponent } from './picture-of-the-day/picture-of-the-day.component';


const routes: Routes = [
  { path: '', component: ShellComponent, children: [
      { path:'mars-rover', loadChildren: '../mars-rover/mars-rover.module#MarsRoverModule' },
      { path:'home', component: PictureOfTheDayComponent },
      { path:'', redirectTo: 'home'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
