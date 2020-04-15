import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottingToolbarMenuComponent } from './plotting-toolbar-menu.component';

describe('PlottingToolbarMenuComponent', () => {
  let component: PlottingToolbarMenuComponent;
  let fixture: ComponentFixture<PlottingToolbarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlottingToolbarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlottingToolbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
