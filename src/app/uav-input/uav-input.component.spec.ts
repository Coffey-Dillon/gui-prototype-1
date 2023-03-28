import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UavInputComponent } from './uav-input.component';

describe('UavInputComponent', () => {
  let component: UavInputComponent;
  let fixture: ComponentFixture<UavInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UavInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UavInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
