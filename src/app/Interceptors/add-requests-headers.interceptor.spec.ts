import { TestBed } from '@angular/core/testing';

import { AddRequestsHeadersInterceptor } from './add-requests-headers.interceptor';

describe('AddRequestsHeadersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddRequestsHeadersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddRequestsHeadersInterceptor = TestBed.inject(AddRequestsHeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
