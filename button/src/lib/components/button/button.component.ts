import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { primary } from './button.component.stories';

@Component({
  selector: '[merc-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.merc-primary]': 'color === "primary"',
    '[class.merc-secondary]': 'color === "secondary"',
    '[class.merc-subtle]': 'color === "subtle"',
  }
})
export class MercButtonComponent {

  @Input() color : 'primary' | 'secondary' | 'subtle' = 'primary';
}
