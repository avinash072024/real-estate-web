import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sell-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './sell-home.component.html',
  styleUrl: './sell-home.component.scss'
})
export class SellHomeComponent {
  steps = [
    { id: '01', title: 'Home Valuation', desc: 'Get a real-time estimate based on local market data.' },
    { id: '02', title: 'Professional Staging', desc: 'Our experts prepare your home to look its absolute best.' },
    { id: '03', title: 'Global Marketing', desc: 'We list your property on over 100+ premium platforms.' },
    { id: '04', title: 'Closing the Deal', desc: 'We handle the paperwork and get you the best price.' }
  ];

  onValuationSubmit() {
    alert('Thank you! Our local expert will contact you with a detailed report.');
  }
}
