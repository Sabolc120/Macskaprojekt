import { TestBed } from '@angular/core/testing';

import { CatsSerivceService } from './cats-serivce.service';

describe('CatsSerivceService', () => {
  let service: CatsSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
