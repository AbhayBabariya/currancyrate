import { TestBed } from '@angular/core/testing';

import { ApiRateService } from './api-rate.service';

describe('ApiRateService', () => {
  let service: ApiRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
