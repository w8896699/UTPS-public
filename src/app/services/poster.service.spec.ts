import { TestBed } from '@angular/core/testing';

import { PosterService } from './poster.service';

describe('PosterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosterService = TestBed.get(PosterService);
    expect(service).toBeTruthy();
  });
});
