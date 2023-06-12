import { TestBed } from '@angular/core/testing';

import { CatsGuardService } from './cats-guard.service';

describe('CatsGuardService', () => {
  let service: CatsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
