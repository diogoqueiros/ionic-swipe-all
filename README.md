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
  ]
})
export class AppModule {
}
```

## Usage

With this module you can use `(swipeup)` and `(swipedown)` events. In the `(swipe)` event vertical gestures are detected.
