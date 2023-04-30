import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { NavbarLinksComponent } from './components/navbar-links/navbar-links.component';
import { PathLinkComponent } from './components/path-link/path-link.component';
import { GetClassNameByViewModePipe } from './pipes/get-class-name-by-view-mode.pipe';

const material: any[] = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [
    GetClassNameByViewModePipe,
    NavbarComponent,
    NavbarLinksComponent,
    PathLinkComponent,
  ],
  imports: [CommonModule, ...material, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
