import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  user = { name: '', email: '', age: null, gender: '', skills: { angular: false, react: false } };
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form Data:', this.user);
    }
  }
}
