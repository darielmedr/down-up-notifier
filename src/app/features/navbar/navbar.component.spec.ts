import { PathLink } from './models/path-link.model';
import { NavbarLinksComponent } from './components/navbar-links/navbar-links.component';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MockComponents, MockModule, MockProviders } from 'ng-mocks';

import { NavbarComponent } from './navbar.component';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { NavbarService } from './services/navbar.service';
import { EMPTY, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import { NavbarLinksMode } from './models/navbar-links-mode.model';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let changeDetectorRef: ChangeDetectorRef;

  let navbarServiceSpy: jasmine.SpyObj<NavbarService>;
  let observerSpy: jasmine.SpyObj<BreakpointObserver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent, ...MockComponents(NavbarLinksComponent)],
      imports: [
        MockModule(MatToolbarModule),
        MockModule(MatIconModule),
        MockModule(MatButtonModule),
      ],
      providers: [...MockProviders(BreakpointObserver, NavbarService)],
    }).compileComponents();
  });

  beforeEach(() => {
    navbarServiceSpy = TestBed.inject(
      NavbarService,
    ) as jasmine.SpyObj<NavbarService>;
    observerSpy = TestBed.inject(
      BreakpointObserver,
    ) as jasmine.SpyObj<BreakpointObserver>;

    observerSpy.observe.and.returnValue(EMPTY);
    navbarServiceSpy.getLinks.and.returnValue(EMPTY);

    fixture = TestBed.createComponent(NavbarComponent);
    changeDetectorRef = fixture.componentRef.injector.get(ChangeDetectorRef);
    component = fixture.componentInstance;
    changeDetectorRef.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when is handset screen view and menu is closed', () => {
    beforeEach(() => {
      // mock viewport to be Handset dimensions
      observerSpy.observe.withArgs(Breakpoints.Handset).and.returnValue(
        of({
          matches: true,
        } as BreakpointState),
      );
      // close menu
      component['openMenuEmitter$'].next(false);

      component.ngOnInit();
      changeDetectorRef.detectChanges();
    });

    it('should show menu button with class "menu-btn"', () => {
      const menuBtnElement = fixture.debugElement.query(By.css('.menu-btn'));
      expect(menuBtnElement).toBeTruthy();
    });

    it('should hide "navbar-links" component', () => {
      const navbarLinksElement = fixture.debugElement.query(
        By.css('app-navbar-links'),
      );
      expect(navbarLinksElement).toBeFalsy();
    });
  });

  describe('when is not handset screen', () => {
    beforeEach(() => {
      // mock viewport to NOT be Handset dimensions
      observerSpy.observe.withArgs(Breakpoints.Handset).and.returnValue(
        of({
          matches: false,
        } as BreakpointState),
      );

      component.ngOnInit();
      changeDetectorRef.detectChanges();
    });

    it('should hide menu button with class "menu-btn"', () => {
      const menuBtnElement = fixture.debugElement.query(By.css('.menu-btn'));
      expect(menuBtnElement).toBeFalsy();
    });

    it('should show "navbar-links" component', () => {
      const navbarLinksElement = fixture.debugElement.query(
        By.css('app-navbar-links'),
      );
      expect(navbarLinksElement).toBeTruthy();
    });
  });

  describe('when menu is open', () => {
    beforeEach(() => {
      // open menu
      component['openMenuEmitter$'].next(true);

      component.ngOnInit();
      changeDetectorRef.detectChanges();
    });

    it('should hide menu button with class "menu-btn"', () => {
      const menuBtnElement = fixture.debugElement.query(By.css('.menu-btn'));
      expect(menuBtnElement).toBeFalsy();
    });

    it('should show "navbar-links" component', () => {
      const navbarLinksComponent = fixture.debugElement.query(
        By.css('app-navbar-links'),
      );
      expect(navbarLinksComponent).toBeTruthy();
    });
  });

  describe('"navbar-links" component', () => {
    it('should have "links" property set', () => {
      // ensure "navbar-links" component has been rendered
      // open the menu
      component['openMenuEmitter$'].next(true);

      const mockLinks: PathLink[] = [{} as PathLink, {} as PathLink];
      navbarServiceSpy.getLinks.and.returnValue(of(mockLinks));

      component.ngOnInit();
      changeDetectorRef.detectChanges();

      const menuBtnElement = fixture.debugElement.query(
        By.css('app-navbar-links'),
      );
      const menuComponent =
        menuBtnElement.componentInstance as NavbarLinksComponent;

      const expectedLength = mockLinks.length;

      expect(menuComponent.links.length).toBe(expectedLength);
    });

    it('should set "mode" property to "menu" when is handset screen', fakeAsync(() => {
      // ensure "navbar-links" component has been rendered
      // open the menu
      component['openMenuEmitter$'].next(true);
      // mock viewport to be Handset dimensions
      observerSpy.observe.withArgs(Breakpoints.Handset).and.returnValue(
        of({
          matches: true,
        } as BreakpointState),
      );

      component.ngOnInit();
      changeDetectorRef.detectChanges();

      const navbarLinksElement = fixture.debugElement.query(
        By.css('app-navbar-links'),
      );

      const navbarLinksComponent =
        navbarLinksElement.componentInstance as NavbarLinksComponent;

      const expectedMode: NavbarLinksMode = 'menu';

      expect(navbarLinksComponent.mode).toBe(expectedMode);
    }));

    it('should set "mode" property to "default" when is NOT handset screen', fakeAsync(() => {
      // ensure "navbar-links" component has been rendered
      // mock viewport to NOT be Handset dimensions
      observerSpy.observe.withArgs(Breakpoints.Handset).and.returnValue(
        of({
          matches: false,
        } as BreakpointState),
      );

      component.ngOnInit();
      changeDetectorRef.detectChanges();

      const navbarLinksElement = fixture.debugElement.query(
        By.css('app-navbar-links'),
      );

      const navbarLinksComponent =
        navbarLinksElement.componentInstance as NavbarLinksComponent;

      const expectedMode: NavbarLinksMode = 'default';

      expect(navbarLinksComponent.mode).toBe(expectedMode);
    }));
  });
});
