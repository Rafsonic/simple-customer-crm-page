import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../shared/activity.class';
import {SvgIcons} from '../../../assets/svg-icons.enum';

@Component({
  selector: 'app-customer-activities',
  templateUrl: './customer-activities.component.html',
  styleUrls: ['./customer-activities.component.scss']
})
export class CustomerActivitiesComponent implements OnInit {

  @Input() activities: Activity[];

  svgIcons = SvgIcons;

  constructor() { }

  ngOnInit(): void {
  }

}
