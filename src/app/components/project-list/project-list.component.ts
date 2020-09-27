import { ProjectService } from './../../services/project.service';
import { ProjectItem } from './../../models/project-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  items: ProjectItem[] = [{
    companyName: 'gleirchler zimam gotcoaski , ...',
    companyLogoUrl: 'http://lorempixel.com/400/200',
    companyTechnology: 'node angular asp.net',
    country: 'albania',
    shipDate: '1/15/2019',
    status: 4,
    type: 1,
    assigned: {
      userAvatarUrl: 'http://lorempixel.com/400/200/people',
      userName: 'Alexander',
      userPosition: 'CEO'
    }
  }];

  selectAllItem = false;

  ngOnInit() {
    this.getProjectList();
  }

  getProjectList() {
    this.projectService.getProjects().subscribe(res => {
      if (res) {
        this.items.push(...res);
      }
    });
  }

}
