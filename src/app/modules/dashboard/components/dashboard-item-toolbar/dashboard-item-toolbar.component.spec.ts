import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItemToolbarComponent } from './dashboard-item-toolbar.component';

describe('DashboardItemToolbarComponent', () => {
  let component: DashboardItemToolbarComponent;
  let fixture: ComponentFixture<DashboardItemToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardItemToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardItemToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
