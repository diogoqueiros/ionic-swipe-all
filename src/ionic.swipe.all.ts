import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

import * as Hammer from 'hammerjs';

@Injectable()
export class IonicSwipeAll extends HammerGestureConfig  {

  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
