import { TestBed } from '@angular/core/testing';

import { DashboardGridSettingsFetchService } from './dashboard-grid-settings-fetch.service';

describe('DashboardGridSettingsFetchService', () => {
  let service: DashboardGridSettingsFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardGridSettingsFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
