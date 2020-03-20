import { TestBed } from '@angular/core/testing';

import { DashboardGridSettingsService } from './dashboard-grid-settings.service';

describe('DashboardSettingsService', () => {
  let service: DashboardGridSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardGridSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
