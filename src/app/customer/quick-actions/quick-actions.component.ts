import {Component, OnInit} from '@angular/core';
import {QuickActions} from './shared/quick-actions.class';
import {SvgIcons} from '../../../assets/svg-icons.enum';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent implements OnInit {

  quickActions: QuickActions[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this._setQuickActions();
  }

  private _setQuickActions() {
    this.quickActions = [
      new QuickActions({
        key: 'edit-customer',
        name: 'Edit Customer',
        icon: SvgIcons.edit
      }),
      new QuickActions({
        key: 'change-status',
        name: 'Change Status',
        icon: SvgIcons.status
      }),
      new QuickActions({
        key: 'deposit',
        name: 'Deposit',
        icon: SvgIcons.deposit
      }),
      new QuickActions({
        key: 'withdrawal',
        name: 'Withdrawal',
        icon: SvgIcons.outgoing
      })
    ];
  }

}
