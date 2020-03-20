import { TestBed } from '@angular/core/testing';

import { DashboardGridOptionsService } from './dashboard-grid-options.service';

describe('DashboardGridOptionsService', () => {
  let service: DashboardGridOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardGridOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
