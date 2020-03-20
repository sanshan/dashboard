import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTextInputControlComponent } from './grid-text-input-control.component';

describe('GridTextInputControlComponent', () => {
  let component: GridTextInputControlComponent;
  let fixture: ComponentFixture<GridTextInputControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTextInputControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTextInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
