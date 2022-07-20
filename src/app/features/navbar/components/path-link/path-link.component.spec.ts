import { RouterTestingModule } from '@angular/router/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';
import { Location } from '@angular/common';
import { PathLink } from 'src/app/features/navbar/models/path-link.model';
import { PathLinkComponent } from './path-link.component';
import { By } from '@angular/platform-browser';
import { Router, RouterLinkWithHref } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

describe('PathLinkComponent', () => {
  let component: PathLinkComponent;
  let fixture: ComponentFixture<PathLinkComponent>;

  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathLinkComponent],
      imports: [
        MockModule(MatIconModule),
        MockModule(MatButtonModule),
        RouterTestingModule,
      ],
    })
      .overrideComponent(PathLinkComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(PathLinkComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  beforeEach(fakeAsync(() => {
    fixture.ngZone?.run(() => router.initialNavigation());
    tick();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "fake-path" when click on link', () => {
    const mockLink: PathLink = {
      name: 'Name',
      icon: 'icon',
      path: 'fake-path',
    };

    component.link = mockLink;
    fixture.detectChanges();

    const linkElement = fixture.debugElement.query(By.css('a'));
    const routerLink = linkElement.injector.get(RouterLinkWithHref);
    const expectedPath: string = '/fake-path';

    expect(routerLink['href']).toEqual(expectedPath);
  });
});
