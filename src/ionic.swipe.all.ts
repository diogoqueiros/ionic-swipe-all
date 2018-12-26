import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

import * as Hammer from 'hammerjs';

@Directive({
  selector: '[swipeAll]',
})
export class IonicSwipeAll extends HammerGestureConfig implements OnInit {

  @Output() swipe = new EventEmitter<any>();
  @Output() swipeup = new EventEmitter<any>();
  @Output() swipedown = new EventEmitter<any>();

  private hammer: any = Hammer;

  constructor(private elem: ElementRef) {
    super();
  }

  ngOnInit(): void {
    const instance = new Hammer(this.elem.nativeElement);
    instance.get('swipe').set({ direction: this.hammer.DIRECTION_VERTICAL });

    instance.on('swipe', event => this.swipe.emit(event));
    instance.on('swipeup', event => this.swipeup.emit(event));
    instance.on('swipedown', event => this.swipedown.emit(event));
  }

}
