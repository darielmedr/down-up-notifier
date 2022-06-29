import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFlagSelectorComponent } from './country-flag-selector.component';

describe('CountryFlagSelectorComponent', () => {
  let component: CountryFlagSelectorComponent;
  let fixture: ComponentFixture<CountryFlagSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryFlagSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFlagSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
