import { TestBed } from '@angular/core/testing';

import { PokemonCaptureServiceService } from './pokemon-capture-service.service';

describe('PokemonCaptureServiceService', () => {
  let service: PokemonCaptureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCaptureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
