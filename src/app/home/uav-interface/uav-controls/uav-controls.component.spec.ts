import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UavControlsComponent } from './uav-controls.component';

describe('UavControlsComponent', () => {
  let component: UavControlsComponent;
  let fixture: ComponentFixture<UavControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UavControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UavControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
