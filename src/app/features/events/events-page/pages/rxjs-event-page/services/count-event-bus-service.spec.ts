import { TestBed } from '@angular/core/testing';

import { CountEventBusService } from './count-event-bus-service';

describe('CountEventBusService', () => {
  let service: CountEventBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountEventBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
