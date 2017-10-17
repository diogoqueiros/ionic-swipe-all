# Ionic Swipe All

Ionic Swipe All allow Ionic (≥ v2) to recognize both horizontal and vertical swipe gesture.

## Installation

```
npm install --save ionic-swipe-all
```

**For Ionic 2 RC.0 and later:**

```typescript
import { IonicSwipeAllModule } from 'ionic-swipe-all';

@NgModule({
  imports: [
    IonicSwipeAllModule,
  ],
})
export class AppModule {
}
```

## Usage

With this module you can use `(swipeup)` and `(swipedown)` events. In the `(swipe)` event vertical gestures are detected.
Just add the `swipeAll` property to the element you want to swipe and use the events as needed.
The `(swipeleft)` and `(swiperight)` events are available too.

```javascript
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

