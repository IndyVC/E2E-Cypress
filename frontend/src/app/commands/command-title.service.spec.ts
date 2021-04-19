import { TestBed } from '@angular/core/testing';

import { CommandTitleService } from './command-title.service';

describe('CommandTitleService', () => {
  let service: CommandTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
