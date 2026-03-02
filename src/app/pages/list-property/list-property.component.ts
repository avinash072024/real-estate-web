import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-property',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-property.component.html',
  styleUrl: './list-property.component.scss'
})
export class ListPropertyComponent {
  currentStep = 1;

  // Progress tracking
  nextStep() { if (this.currentStep < 3) this.currentStep++; }
  prevStep() { if (this.currentStep > 1) this.currentStep--; }

  onSubmit() {
    alert('Property submitted for review! Our team will verify the details shortly.');
  }
}
