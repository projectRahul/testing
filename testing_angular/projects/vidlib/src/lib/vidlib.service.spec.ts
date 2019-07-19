import { TestBed } from '@angular/core/testing';

import { VidlibService } from './vidlib.service';

describe('VidlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VidlibService = TestBed.get(VidlibService);
    expect(service).toBeTruthy();
  });
});
