import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsEditor } from './options-editor';

describe('OptionsEditor', () => {
  let component: OptionsEditor;
  let fixture: ComponentFixture<OptionsEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsEditor],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
