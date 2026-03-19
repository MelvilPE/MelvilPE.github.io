import { InputCheckbox } from './input-checkbox';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('InputCheckbox', () => {
  let component: InputCheckbox;
  let fixture: ComponentFixture<InputCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCheckbox],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
