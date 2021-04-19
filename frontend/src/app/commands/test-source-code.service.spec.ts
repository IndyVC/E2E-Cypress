import { TestBed } from '@angular/core/testing';

import { TestSourceCodeService } from './test-source-code.service';

describe('TestSourceCodeService', () => {
  let service: TestSourceCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestSourceCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
