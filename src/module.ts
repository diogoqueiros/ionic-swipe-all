import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { IonicSwipeAll } from './ionic.swipe.all';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: IonicSwipeAll,
    }
  ],
})

export class IonicSwipeAllModule {
}
