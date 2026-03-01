import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  imports: [RouterLink],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent {
  lastUpdated: string = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  acceptTerms() {
    localStorage.setItem('terms-accepted', 'true');
    // Navigate back to home or property page
  }
}
