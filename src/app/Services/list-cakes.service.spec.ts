import { TestBed } from '@angular/core/testing';

import { ListCakesService } from './list-cakes.service';

describe('ListCakesService', () => {
  let service: ListCakesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCakesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
