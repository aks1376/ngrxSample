import { ProjectItem } from './../../../models/project-item';
import { ProjectService } from './../../../services/project.service';
import { ProjectSettings } from './../../../models/project-settings';
import { ProjectDetail } from './../../../models/project-detail';
import { DeliveryDetail } from './../../../models/delivery-detail';
import { CreateProjectState } from 'src/app/models/create-project.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ResetState } from '../store/create-new-project.action';

@Component({
  selector: 'app-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.scss']
})
export class ReviewAndSubmitComponent implements OnInit {

  constructor(
    private store: Store<{ createProject: CreateProjectState }>,
    private projectService: ProjectService,
    private router: Router
  ) { }

  @Output() previousStep = new EventEmitter();

  projectState: CreateProjectState;
  deliveryDetail: DeliveryDetail;
  projectDetail: ProjectDetail;
  projectSetting: ProjectSettings;

  ngOnInit() {
    this.getState();
  }

  getState() {
    this.store.select('createProject').subscribe(state => {
      this.projectState = state;
      this.deliveryDetail = state.deliveryDetail.value;
      this.projectDetail = state.projectDetail.value;
      this.projectSetting = state.projectSetting.value;
    });
  }

  onSubmit() {
    const newProject: ProjectItem = {
      companyName: this.projectDetail.projectOwner,
      companyLogoUrl: 'http://lorempixel.com/200/200',
      companyTechnology: 'Angular Express aps.net',
      country: this.deliveryDetail.country,
      shipDate: '11/15/2019',
      assigned: {
        userName: 'Alexander',
        userAvatarUrl: 'http://lorempixel.com/200/200/people',
        userPosition: 'CEO',
      },
      status: 1,
      type: 1,
    };
    this.projectService.createProject(newProject).subscribe(res => {
      this.router.navigate(['/']);
      this.store.dispatch(new ResetState());
    });
  }

  onPreviousStep() {
    this.previousStep.emit();
  }
}
