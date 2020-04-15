import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottingToolbarComponent } from './plotting-toolbar.component';

describe('PlottingToolbarComponent', () => {
  let component: PlottingToolbarComponent;
  let fixture: ComponentFixture<PlottingToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlottingToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlottingToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
