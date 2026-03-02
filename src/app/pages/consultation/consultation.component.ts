import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultation',
  imports: [CommonModule, FormsModule],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss'
})
export class ConsultationComponent {
  selectedService: string = 'Buying';

  services = [
    { id: 'Buying', title: 'Home Buying', icon: 'bi-house-heart', desc: 'Expert guidance on finding and financing your dream home.' },
    { id: 'Selling', title: 'Property Selling', icon: 'bi-graph-up-arrow', desc: 'Strategic marketing to get the highest value for your property.' },
    { id: 'Investment', title: 'Real Estate Investment', icon: 'bi-coin', desc: 'Data-driven insights for high-yield property portfolios.' }
  ];

  selectService(id: string) {
    this.selectedService = id;
  }

  onBookConsultation() {
    alert(`Request received for ${this.selectedService} Consultation. We will contact you to confirm the time.`);
  }
}
