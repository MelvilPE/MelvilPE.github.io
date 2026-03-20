import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsGlobalComponent } from './options-global';

describe('OptionsGlobalComponent', () => {
  let component: OptionsGlobalComponent;
  let fixture: ComponentFixture<OptionsGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsGlobalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsGlobalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
