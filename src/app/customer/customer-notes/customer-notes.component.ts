import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../shared/note.class';
import {SvgIcons} from '../../../assets/svg-icons.enum';

@Component({
  selector: 'app-customer-notes',
  templateUrl: './customer-notes.component.html',
  styleUrls: ['./customer-notes.component.scss']
})
export class CustomerNotesComponent implements OnInit {

  @Input() notes: Note[];
  svgIcons = SvgIcons;

  constructor() { }

  ngOnInit(): void {
  }

}
