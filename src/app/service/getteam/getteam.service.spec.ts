import { TestBed, inject } from '@angular/core/testing';

import { GetteamService } from './getteam.service';

describe('GetteamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetteamService]
    });
  });

  it('should be created', inject([GetteamService], (service: GetteamService) => {
    expect(service).toBeTruthy();
  }));
});
