import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOptionsPage } from './dev-options-page';

describe('DevOptionsPage', () => {
  let component: DevOptionsPage;
  let fixture: ComponentFixture<DevOptionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevOptionsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DevOptionsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
