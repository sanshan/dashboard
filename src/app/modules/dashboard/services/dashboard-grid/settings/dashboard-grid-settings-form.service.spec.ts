import { TestBed } from '@angular/core/testing';

import { DashboardGridSettingsFormService } from './dashboard-grid-settings-form.service';

describe('DashboardGridSettingsFormService', () => {
  let service: DashboardGridSettingsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardGridSettingsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
