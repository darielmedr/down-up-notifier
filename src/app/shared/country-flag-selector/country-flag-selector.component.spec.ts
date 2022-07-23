import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { MockModule, MockPipes } from 'ng-mocks';
import { FlagEmojiPipe } from '../pipes/flag-emoji.pipe';
import { FlagPipe } from '../pipes/flag.pipe';

import { CountryFlagSelectorComponent } from './country-flag-selector.component';

describe('CountryFlagSelectorComponent', () => {
  let component: CountryFlagSelectorComponent;
  let fixture: ComponentFixture<CountryFlagSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CountryFlagSelectorComponent,
        ...MockPipes(FlagPipe, FlagEmojiPipe),
      ],
      imports: [MockModule(MatSelectModule)],
    }).compileComponents();
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
