import { TestBed, inject } from '@angular/core/testing';

import { PagiAdminService } from './pagi-admin.service';

describe('PagiAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagiAdminService]
    });
  });

  it('should be created', inject([PagiAdminService], (service: PagiAdminService) => {
    expect(service).toBeTruthy();
  }));
});
