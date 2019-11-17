import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { ShellRoutingModule } from './shell-routing.module';

import { ShellComponent } from './shell.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { PictureOfTheDayComponent } from './picture-of-the-day/picture-of-the-day.component';
import { NasaService } from '../services/nasa.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ShellComponent,
    MainNavigationComponent,
    PictureOfTheDayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShellRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    NasaService
  ]
})
export class ShellModule { }
