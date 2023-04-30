import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MockComponents, MockModule, MockPipes } from 'ng-mocks';
import { GetClassNameByViewModePipe } from 'src/app/features/navbar/pipes/get-class-name-by-view-mode.pipe';
import { PathLink } from 'src/app/features/navbar/models/path-link.model';
import { PathLinkComponent } from 'src/app/features/navbar/components/path-link/path-link.component';
import { NavbarLinksComponent } from './navbar-links.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const LEFT_MOUSE_BUTTON = 0;

describe('NavbarLinksComponent', () => {
  let component: NavbarLinksComponent;
  let fixture: ComponentFixture<NavbarLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavbarLinksComponent,
        ...MockPipes(GetClassNameByViewModePipe),
        ...MockComponents(PathLinkComponent),
      ],
      imports: [MockModule(MatIconModule), MockModule(MatButtonModule)],
    })
      .overrideComponent(NavbarLinksComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render a 'app-path-link' for each input path link", () => {
    const mockLinks: PathLink[] = [
      {
        name: 'firstName',
        icon: 'firstIcon',
        path: 'firstPath',
      },
      {
        name: 'secondName',
        icon: 'secondIcon',
        path: 'secondPath',
      },
    ];

    component.links = mockLinks;
    fixture.detectChanges();

    const expectedElementsLength: number = 2;

    const linkElements = fixture.debugElement.queryAll(By.css('li.link'));

    expect(linkElements.length).toBe(expectedElementsLength);
  });

  describe("'ul.links' element", () => {
    it('should exists', () => {
      const linksElement = fixture.debugElement.query(By.css('ul.links'));
      expect(linksElement).toBeTruthy();
    });

    it("should have class name 'open' when input prop #openMenu is true", () => {
      const className: string = 'open';

      component.openMenu = true;
      fixture.detectChanges();

      const linksElement = fixture.debugElement.query(By.css('ul.links'));
      const classes = linksElement.classes;

      expect(classes[className]).toBeTrue();
    });

    it('should emit #closeMenu value when clicked', fakeAsync(() => {
      const linksElement = fixture.debugElement.query(By.css('ul.links'));
      const spy = spyOn(component.closeMenu, 'emit');

      linksElement.triggerEventHandler('click', { button: LEFT_MOUSE_BUTTON });
      tick();
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    }));
  });
});
