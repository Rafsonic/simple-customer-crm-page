import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navLinks: any[] = [];

  constructor() {
    this._setNavigationTabs();
  }

  ngOnInit(): void {
  }

  _setNavigationTabs(): void {
    this.navLinks = [
      {
        path: '/profile',
        label: 'Profile'
      },
      {
        path: '/trading-accounts',
        label: 'Trading Accounts'
      },
      {
        path: '/transactions',
        label: 'Transactions'
      }
    ];
  }

}
