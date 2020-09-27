import { ProjectItem } from './../../../models/project-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {

  @Input() item: ProjectItem;
  @Input() selectItem = false;
  constructor() { }

  ngOnInit() {
  }

}
