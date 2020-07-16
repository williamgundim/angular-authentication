import { TestBed, inject } from '@angular/core/testing';

import { App\core\token\tokenService } from './app\core\token\token.service';

describe('App\core\token\tokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [App\core\token\tokenService]
    });
  });

  it('should be created', inject([App\core\token\tokenService], (service: App\core\token\tokenService) => {
    expect(service).toBeTruthy();
  }));
});
