import { TestBed } from '@angular/core/testing';

import { SendSmsService } from './send-sms.service';

describe('SendSmsService', () => {
  let service: SendSmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendSmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
