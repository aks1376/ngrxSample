import { DeliveryDetail } from './../../models/delivery-detail';
import { CreateProjectState } from 'src/app/models/create-project.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

export enum stepType {
  PROJECT_DETAILS = 1,
  PROJECT_SETTINGS = 2,
  DELIVERY_DETAILS = 3,
  REVIEW_AND_SUBMIT = 4
}

@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.component.html',
  styleUrls: ['./create-new-project.component.scss']
})
export class CreateNewProjectComponent implements OnInit {

  constructor(private store: Store<{ createProject: CreateProjectState }>) { }

  selectedStep = 1;
  createProjectState: CreateProjectState;
  ngOnInit() {
    this.getState();
  }

  getState() {
    this.store.select('createProject').subscribe(state => {
      this.createProjectState = state;
    });
  }

  onChangeStep(step: number) {
    switch (step) {
      case stepType.PROJECT_DETAILS:
        this.selectedStep = step;
        break;
      case stepType.PROJECT_SETTINGS:
        // check if previous step form is valid
        if (this.createProjectState && this.createProjectState.projectDetail.isFormValid) {
          this.selectedStep = step;
        }
        break;
      case stepType.DELIVERY_DETAILS:
        // check if previous step form is valid
        if (this.createProjectState && this.createProjectState.projectSetting.isFormValid) {
          this.selectedStep = step;
        }
        break;
      case stepType.REVIEW_AND_SUBMIT:
        // check if previous step form is valid
        if (this.createProjectState && this.createProjectState.deliveryDetail.isFormValid) {
          this.selectedStep = step;
        }
        break;
      default:
        break;
    }
  }

  nextStep() {
    this.selectedStep++;
  }
  previousStep() {
    this.selectedStep--;
  }

}
