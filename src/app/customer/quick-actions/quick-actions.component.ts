import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuickActions} from './shared/quick-actions.class';
import {SvgIcons} from '../../../assets/svg-icons.enum';
import {MatDialog} from '@angular/material/dialog';
import {CreateTransactionComponent} from '../../create-transaction/create-transaction.component';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent implements OnInit {

  @Output() quickActionEvent = new EventEmitter<QuickActions>();
  quickActions: QuickActions[] = [];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._setQuickActions();
  }



  clickQuickAction(action: QuickActions): void {
    switch (action.key) {
      case 'edit-customer':
        this.quickActionEvent.emit(action);
        break;
      case 'change-status':
        break;
      case 'Deposit':
      case 'Withdrawal':
        this._openDialog(action);
        break;
    }
  }

  private _openDialog(action: QuickActions) {
    this.dialog.open(CreateTransactionComponent, {
      data: {
        type: action.key
      }
    });
  }

  private _setQuickActions(): void {
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
        key: 'Deposit',
        name: 'Deposit',
        icon: SvgIcons.deposit
      }),
      new QuickActions({
        key: 'Withdrawal',
        name: 'Withdrawal',
        icon: SvgIcons.outgoing
      })
    ];
  }

}
