import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTypingComponent } from './auto-typing.component';

describe('AutoTypingComponent', () => {
  let component: AutoTypingComponent;
  let fixture: ComponentFixture<AutoTypingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoTypingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
