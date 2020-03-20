import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGridSettingsComponent } from './dashboard-grid-settings.component';

describe('DashboardGridSettingsComponent', () => {
  let component: DashboardGridSettingsComponent;
  let fixture: ComponentFixture<DashboardGridSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGridSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGridSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
