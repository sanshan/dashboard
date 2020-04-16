import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItemToolbarMenuComponent } from './dashboard-item-toolbar-menu.component';

describe('DashboardItemToolbarMenuComponent', () => {
  let component: DashboardItemToolbarMenuComponent;
  let fixture: ComponentFixture<DashboardItemToolbarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardItemToolbarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardItemToolbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
