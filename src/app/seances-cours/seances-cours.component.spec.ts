import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeancesCoursComponent } from './seances-cours.component';

describe('SeancesCoursComponent', () => {
  let component: SeancesCoursComponent;
  let fixture: ComponentFixture<SeancesCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeancesCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeancesCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
