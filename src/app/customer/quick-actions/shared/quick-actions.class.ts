import {SafeHtml} from '@angular/platform-browser';

export class QuickActions {
  key: string;
  name: string;
  icon: SafeHtml;

  constructor(init: Partial<QuickActions>) {
    Object.assign(this, init);
  }
}
