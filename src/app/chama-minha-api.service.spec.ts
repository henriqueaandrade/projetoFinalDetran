import { TestBed, inject } from '@angular/core/testing';

import { ChamaMinhaApiService } from './chama-minha-api.service';

describe('ChamaMinhaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChamaMinhaApiService]
    });
  });

  it('should be created', inject([ChamaMinhaApiService], (service: ChamaMinhaApiService) => {
    expect(service).toBeTruthy();
  }));
});
