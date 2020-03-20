import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNumberInputControlComponent } from './grid-number-input-control.component';

describe('GridNumberInputControlComponent', () => {
  let component: GridNumberInputControlComponent;
  let fixture: ComponentFixture<GridNumberInputControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridNumberInputControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridNumberInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
