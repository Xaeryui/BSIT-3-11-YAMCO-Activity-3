import { TestBed } from '@angular/core/testing';
import { MovieInfo } from './movie-info';

describe('MovieInfo', () => {
  let service: MovieInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
