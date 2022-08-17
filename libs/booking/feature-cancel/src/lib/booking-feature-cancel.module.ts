import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@app/booking/domain';
import { CancelComponent } from './cancel.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [CancelComponent],
  exports: [CancelComponent],
})
export class BookingFeatureCancelModule {}
