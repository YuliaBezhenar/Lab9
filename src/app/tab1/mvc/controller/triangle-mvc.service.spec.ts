import { TestBed } from '@angular/core/testing';

import { TriangleMvcService } from './triangle-mvc.service';

describe('TriangleMvcService', () => {
  let service: TriangleMvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriangleMvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
