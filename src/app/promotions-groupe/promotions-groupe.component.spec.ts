import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsGroupeComponent } from './promotions-groupe.component';

describe('PromotionsGroupeComponent', () => {
  let component: PromotionsGroupeComponent;
  let fixture: ComponentFixture<PromotionsGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsGroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
