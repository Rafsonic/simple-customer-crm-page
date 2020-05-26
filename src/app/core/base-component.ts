import {OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

export class BaseComponent implements OnDestroy {

  private subscriptions: Subscription[] = [];
  loading: boolean = false;

  set subscription(sub: Subscription) {
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


}
