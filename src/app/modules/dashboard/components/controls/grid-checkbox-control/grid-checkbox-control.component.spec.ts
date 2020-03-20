import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCheckboxControlComponent } from './grid-checkbox-control.component';

describe('GridCheckboxControlComponent', () => {
  let component: GridCheckboxControlComponent;
  let fixture: ComponentFixture<GridCheckboxControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCheckboxControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCheckboxControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
