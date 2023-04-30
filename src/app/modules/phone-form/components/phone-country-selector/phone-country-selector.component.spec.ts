import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { MockModule, MockPipes } from 'ng-mocks';
import { FlagEmojiPipe } from '../../pipes/flag-emoji.pipe';
import { PhoneCodePrefixPipe } from '../../pipes/phone-code-prefix.pipe';

import { PhoneCountrySelectorComponent } from './phone-country-selector.component';

describe('PhoneCountrySelectorComponent', () => {
  let component: PhoneCountrySelectorComponent;
  let fixture: ComponentFixture<PhoneCountrySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PhoneCountrySelectorComponent,
        ...MockPipes(FlagEmojiPipe, PhoneCodePrefixPipe),
      ],
      imports: [MockModule(MatSelectModule)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCountrySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
