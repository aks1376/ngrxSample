import { CreateProjectState } from 'src/app/models/create-project.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SetProjectSetting } from '../store/create-new-project.action';

@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.scss']
})
export class ProjectSettingsComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store<{ createProject: CreateProjectState }>) { }

  @Output() nextStep = new EventEmitter();
  @Output() previousStep = new EventEmitter();

  settingForm: FormGroup;
  ngOnInit() {
    this.initForm();
    this.getState();
  }

  initForm() {
    this.settingForm = this.fb.group({
      email: [undefined, [Validators.required, Validators.email]],
      language: [undefined, [Validators.required]],
      timezone: [undefined, [Validators.required]],
      communication: this.fb.group({
        email: [false],
        sms: [false],
        phone: [false]
      })
    });
  }

  getState() {
    this.store.select('createProject').subscribe(state => {
      if (state.projectSetting.isFormValid) {
        this.settingForm.patchValue(state.projectSetting.value);
      }
    });
  }

  onNextStep() {
    if (this.settingForm.valid) {
      this.store.dispatch(new SetProjectSetting(this.settingForm.value));
      this.nextStep.emit();
    }
  }

  onPreviousStep() {
    this.previousStep.emit();
  }
}
