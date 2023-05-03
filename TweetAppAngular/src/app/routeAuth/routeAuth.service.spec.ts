import { TestBed } from '@angular/core/testing';

import { RouteAuth } from './routeAuth.service';

describe('RouteAuth', () => {
  let service: RouteAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
