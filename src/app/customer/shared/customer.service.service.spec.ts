import { TestBed } from '@angular/core/testing';

import { Customer.ServiceService } from './customer.service.service';

describe('Customer.ServiceService', () => {
  let service: Customer.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Customer.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
