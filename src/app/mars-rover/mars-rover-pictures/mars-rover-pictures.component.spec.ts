import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsRoverPicturesComponent } from './mars-rover-pictures.component';

describe('MarsRoverPicturesComponent', () => {
  let component: MarsRoverPicturesComponent;
  let fixture: ComponentFixture<MarsRoverPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsRoverPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsRoverPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
