import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      skills: this.fb.group({
        angular: [false],
        react: [false]
      })
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.submitted = true;
      console.log('Form Submitted:', this.userForm.value);
    }
  }
}
