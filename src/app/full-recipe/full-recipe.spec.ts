import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullRecipe } from './full-recipe';

describe('FullRecipe', () => {
  let component: FullRecipe;
  let fixture: ComponentFixture<FullRecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullRecipe],
    }).compileComponents();

    fixture = TestBed.createComponent(FullRecipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
