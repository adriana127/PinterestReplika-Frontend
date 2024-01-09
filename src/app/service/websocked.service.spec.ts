import { TestBed } from '@angular/core/testing';

import { WebsockedService } from './websocked.service';

describe('WebsockedService', () => {
  let service: WebsockedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsockedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
