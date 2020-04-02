import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardToolbarItemComponent } from './dashboard-toolbar-item.component';

describe('DashboardToolbarItemComponent', () => {
  let component: DashboardToolbarItemComponent;
  let fixture: ComponentFixture<DashboardToolbarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardToolbarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardToolbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
