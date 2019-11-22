import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraSelectionListComponent } from './camera-selection-list.component';

describe('CameraSelectionListComponent', () => {
  let component: CameraSelectionListComponent;
  let fixture: ComponentFixture<CameraSelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraSelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
