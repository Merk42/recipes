import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIngredients } from './all-ingredients';

describe('AllIngredients', () => {
  let component: AllIngredients;
  let fixture: ComponentFixture<AllIngredients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllIngredients],
    }).compileComponents();

    fixture = TestBed.createComponent(AllIngredients);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
