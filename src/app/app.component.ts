import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  NonNullableFormBuilder,
  FormControl,
} from '@angular/forms';
import { DemoFormType } from './iform-type';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule],
})
export class AppComponent implements OnInit {
  typedFormGroup!: FormGroup;

  constructor(private _fb: FormBuilder) {}
  ngOnInit(): void {
    this.createTypedForm();
    this.typedFormGroup.get('remarks')?.setValue('null');
  }
  createTypedForm() {
    this.typedFormGroup = this._fb.group<DemoFormType>({
      firstName: new FormControl('John Doe'),
      age: new FormControl(),
      remarks: new FormControl<string>('null', { nonNullable: true }),
    });
  }

  submit(): void {
    console.log({ form: this.typedFormGroup.value });
  }
}
