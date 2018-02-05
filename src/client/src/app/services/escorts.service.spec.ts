import { TestBed, inject } from '@angular/core/testing';

import { EscortsService } from './escorts.service';

describe('EscortsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EscortsService]
    });
  });

  it('should be created', inject([EscortsService], (service: EscortsService) => {
    expect(service).toBeTruthy();
  }));
});
