import { TestBed } from '@angular/core/testing';

import { TweetuserserviceService } from './tweetuserservice.service';

describe('TweetuserserviceService', () => {
  let service: TweetuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
