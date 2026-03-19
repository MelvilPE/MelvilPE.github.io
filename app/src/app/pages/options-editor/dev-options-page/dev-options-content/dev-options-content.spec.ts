import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOptionsContent } from './dev-options-content';

describe('DevOptionsContent', () => {
  let component: DevOptionsContent;
  let fixture: ComponentFixture<DevOptionsContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevOptionsContent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevOptionsContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
