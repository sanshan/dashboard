import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSelectControlComponent } from './grid-select-control.component';

describe('GridSelectControlComponent', () => {
  let component: GridSelectControlComponent;
  let fixture: ComponentFixture<GridSelectControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSelectControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSelectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
