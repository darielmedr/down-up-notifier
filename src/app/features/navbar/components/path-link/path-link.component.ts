import { PathLink } from 'src/app/features/navbar/models/path-link.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-path-link',
  templateUrl: './path-link.component.html',
  styleUrls: ['./path-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PathLinkComponent {
  @Input()
  public link: PathLink = {} as PathLink;

  constructor() {}
}
