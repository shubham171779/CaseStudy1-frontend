import { TestBed } from '@angular/core/testing';

import { ServiceEcommService } from './service-ecomm.service';

describe('ServiceEcommService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceEcommService = TestBed.get(ServiceEcommService);
    expect(service).toBeTruthy();
  });
});
