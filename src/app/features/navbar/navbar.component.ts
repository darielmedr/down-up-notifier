import { NavbarLinksMode } from 'src/app/features/navbar/models/navbar-links-mode.model';
import { NavbarService } from './services/navbar.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import { PathLink } from './models/path-link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  public isHandset$: Observable<boolean> = new Observable();
  public links$: Observable<PathLink[]> = new Observable();
  public mode$: Observable<NavbarLinksMode> = new Observable();
  public openMenu$: Observable<boolean> = new Observable();
  public closeMenu$: Observable<boolean> = new Observable();

  private openMenuEmitter$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(
    private navbarService: NavbarService,
    private observer: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    this.isHandset$ = this.observer.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay(1),
    );

    this.mode$ = this.isHandset$.pipe(
      map<boolean, NavbarLinksMode>((isHandset) =>
        isHandset ? 'menu' : 'default',
      ),
    );

    this.links$ = this.navbarService.getLinks().pipe(shareReplay(1));

    this.openMenu$ = this.openMenuEmitter$.asObservable();
    this.closeMenu$ = this.openMenu$.pipe(map((value) => !value));
  }

  public openMenu(): void {
    this.openMenuEmitter$.next(true);
  }
  public closeMenu(): void {
    this.openMenuEmitter$.next(false);
  }
}
