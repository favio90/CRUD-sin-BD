import { TestBed } from '@angular/core/testing';

import { GestorDeDatosService } from './gestor-de-datos.service';

describe('GestorDeDatosService', () => {
  let service: GestorDeDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorDeDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
