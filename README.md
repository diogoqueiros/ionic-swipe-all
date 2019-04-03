# Ionic Swipe All

Ionic Swipe All allow Ionic to recognize both horizontal and vertical swipe gesture.

## Requirements

- **Angular**: 7+

## Installation

```
npm install --save ionic-swipe-all
```

For previous versions of Angular, please use v1.3.0:

```
npm install --save ionic-swipe-all@1.3.0
```

```typescript
import { IonicSwipeAllModule } from 'ionic-swipe-all';

@NgModule({
  imports: [IonicSwipeAllModule],
})
export class AppModule {
}
```

## Usage

With this module you can use `(swipeup)` and `(swipedown)` events. In the `(swipe)` event vertical gestures are detected.
Just add the `swipeAll` property to the element you want to swipe and use the events as needed.
The `(swipeleft)` and `(swiperight)` events are available too.

```typescript
@Component({
    template: `
      <div swipeAll
           (swipe)="swipeAll($event)"
           (swipeleft)="swipeLeft($event)"
           (swiperight)="swipeRight($event)"
           (swipeup)="swipeUp($event)"
           (swipedown)="swipeDown($event)"
      ></div>
    `,
})
export class AppComponent {

    swipeAll(event: any): any {
        console.log('Swipe All', event);
    }

    swipeLeft(event: any): any {
        console.log('Swipe Left', event);
    }

    swipeRight(event: any): any {
        console.log('Swipe Right', event);
    }

    swipeUp(event: any): any {
        console.log('Swipe Up', event);
    }

    swipeDown(event: any): any {
        console.log('Swipe Down', event);
    }

}
```

