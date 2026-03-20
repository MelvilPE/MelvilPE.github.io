import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsDeviceComponent } from './options-device';

describe('OptionsDevice', () => {
  let component: OptionsDeviceComponent;
  let fixture: ComponentFixture<OptionsDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsDeviceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsDeviceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
