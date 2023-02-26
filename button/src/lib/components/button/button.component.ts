import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: '[merc-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MercButtonComponent {

}
