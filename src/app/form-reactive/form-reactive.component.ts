import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent {

  personFormGroup = new FormGroup({
    name: new FormControl('andre'),
    age: new FormControl(40)
  })

  get json(): string {
    return JSON.stringify(this.personFormGroup.value);
  }

  reset() {
    this.personFormGroup.setValue({ name: 'andre', age: 40});
  }
}
