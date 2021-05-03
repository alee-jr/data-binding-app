import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  buttonName = 'My button';
  i = 0;
  spinnerMode: ProgressSpinnerMode = 'determinate';
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;

  constructor() {}

  ngOnInit(): void {}

  save() {
    console.log('Clicked');
  }

  inc() {
    this.i++;
    this.buttonName = 'I was clicked ' + this.i + ' times';
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = 'indeterminate';
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
    }, 3000);
  }

  cbChange(event: any) {
    this.selectDisabled = event.checked;
  }

  selectionChange(event: any) {
    this.selectedOption = event.value;
  }
}
