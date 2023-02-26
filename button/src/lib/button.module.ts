import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MercButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MercButtonComponent],
  exports: [MercButtonComponent],
})
export class MercButtonModule {}
