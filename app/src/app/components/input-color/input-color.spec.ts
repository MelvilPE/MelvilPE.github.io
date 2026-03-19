import { InputColor } from './input-color';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('InputColor', () => {
  let component: InputColor;
  let fixture: ComponentFixture<InputColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputColor],
    }).compileComponents();

    fixture = TestBed.createComponent(InputColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
