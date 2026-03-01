import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Constants } from '../../models/constants';
import { RouterLink } from '@angular/router';
import { AgentsComponent } from "../../components/agents/agents.component";

@Component({
  selector: 'app-properties',
  imports: [CommonModule, NgClass, RouterLink, AgentsComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {
  isGridView = true;

  // properties = [
  //   { id: 1, title: 'Luxury Azure Villa', price: 850000, bhk: 3, sqft: 2400, amenities: ['Pool', 'Gym'], img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800' },
  //   { id: 2, title: 'Modern Sky Bungalow', price: 1200000, bhk: 4, sqft: 3200, amenities: ['Garden', 'Security'], img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800' },
  //   // Add more items...
  // ];

  properties = Constants.MOCK_GALLERY_ITEMS;

  toggleView(isGrid: boolean) {
    this.isGridView = isGrid;
  }
}
