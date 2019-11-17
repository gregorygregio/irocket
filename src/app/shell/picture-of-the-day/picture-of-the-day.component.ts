import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-picture-of-the-day',
  templateUrl: './picture-of-the-day.component.html',
  styleUrls: ['./picture-of-the-day.component.css']
})
export class PictureOfTheDayComponent implements OnInit {


  pictureOfTheDay$ = this.service.pictureOfTheDay$;

  constructor(
    private service: NasaService
  ) { }

  ngOnInit() {
  }

}
