import { TestBed } from '@angular/core/testing';

import { PromotionGroupeServiceService } from './promotion-groupe-service.service';

describe('PromotionGroupeServiceService', () => {
  let service: PromotionGroupeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionGroupeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
