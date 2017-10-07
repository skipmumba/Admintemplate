import { TestBed, inject } from '@angular/core/testing';

import { MatchmanageService } from './matchmanage.service';

describe('MatchmanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchmanageService]
    });
  });

  it('should be created', inject([MatchmanageService], (service: MatchmanageService) => {
    expect(service).toBeTruthy();
  }));
});
