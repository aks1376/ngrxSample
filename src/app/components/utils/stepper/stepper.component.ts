import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Output() changeStep = new EventEmitter();
  @Input() activeStep = 1;
  constructor() { }

  ngOnInit() {
  }

  onChangeStep(step) {
    this.changeStep.emit(step);
  }

}
