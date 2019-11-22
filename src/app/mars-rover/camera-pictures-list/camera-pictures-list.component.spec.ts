import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraPicturesListComponent } from './camera-pictures-list.component';

describe('CameraPicturesListComponent', () => {
  let component: CameraPicturesListComponent;
  let fixture: ComponentFixture<CameraPicturesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraPicturesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraPicturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
