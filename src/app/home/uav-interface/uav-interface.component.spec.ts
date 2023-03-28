import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UavInterfaceComponent } from './uav-interface.component';

describe('UavInterfaceComponent', () => {
  let component: UavInterfaceComponent;
  let fixture: ComponentFixture<UavInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UavInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UavInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
