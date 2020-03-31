import { TestBed } from '@angular/core/testing';

import { DashboardGridService } from './dashboard-grid.service';

describe('DashboardGridService', () => {
  let service: DashboardGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
