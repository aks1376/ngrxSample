import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreateProjectState } from 'src/app/models/create-project.state';
import { SetDeliveryDetails } from '../store/create-new-project.action';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.scss']
})
export class DeliveryDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store<{ createProject: CreateProjectState }>) { }

  @Output() nextStep = new EventEmitter();
  @Output() previousStep = new EventEmitter();

  deliveryForm: FormGroup;
  ngOnInit() {
    this.initForm();
    this.getState();
  }

  initForm() {
    this.deliveryForm = this.fb.group({
      firstAddress: [undefined, [Validators.required, Validators.minLength(3)]],
      secondAddress: [undefined, [Validators.required, Validators.minLength(3)]],
      postcode: [undefined, [Validators.required]],
      city: [undefined, [Validators.required]],
      state: [undefined, [Validators.required]],
      country: [undefined, [Validators.required]]
    });
  }

  getState() {
    this.store.select('createProject').subscribe(state => {
      if (state.deliveryDetail.isFormValid) {
        this.deliveryForm.patchValue(state.deliveryDetail.value);
      }
    });
  }

  onPreviousStep() {
    this.previousStep.emit();
  }

  onNextStep() {
    if (this.deliveryForm.valid) {
      this.store.dispatch(new SetDeliveryDetails(this.deliveryForm.value));
      this.nextStep.emit();
    }
  }

}
