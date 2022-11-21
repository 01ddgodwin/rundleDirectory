import { TestBed } from '@angular/core/testing';

import { CityDirectoryService } from './city-directory.service';

describe('CityDirectoryService', () => {
  let service: CityDirectoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityDirectoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
