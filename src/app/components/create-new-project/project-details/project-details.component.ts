import { SetProjectDetail } from './../store/create-new-project.action';
import { CreateProjectState } from 'src/app/models/create-project.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store<{ createProject: CreateProjectState }>) { }

  @Output() nextState = new EventEmitter();
  projectForm: FormGroup;


  ngOnInit() {
    this.initForm();
    this.getState();
  }

  initForm() {
    this.projectForm = this.fb.group({
      projectName: [undefined, [Validators.required]],
      projectOwner: [undefined, [Validators.required]],
      customerName: [undefined, [Validators.required]],
      contactPhone: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      companySite: [undefined, [Validators.required]]
    });
  }

  getState() {
    this.store.select('createProject').subscribe(state => {
      if (state.projectDetail.isFormValid) {
        this.projectForm.patchValue(state.projectDetail.value);
      }
    });
  }

  onNextStep() {
    if (this.projectForm.valid) {
      this.store.dispatch(new SetProjectDetail(this.projectForm.value));
      this.nextState.emit();
    }
  }

}
