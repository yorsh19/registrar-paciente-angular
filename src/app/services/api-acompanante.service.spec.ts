import { TestBed } from '@angular/core/testing';

import { ApiAcompananteService } from './api-acompanante.service';

describe('ApiAcompananteService', () => {
  let service: ApiAcompananteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAcompananteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
