import { TestBed } from '@angular/core/testing';

import { AffectationBlocsService } from './affectation-blocs.service';

describe('AffectationBlocsService', () => {
  let service: AffectationBlocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffectationBlocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
