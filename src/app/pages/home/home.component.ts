import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Constants } from '../../models/constants';
import { AgentsComponent } from '../../components/agents/agents.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AgentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // galleryItems = [
  //   { id: 1, title: 'Golden Valley Bungalow', type: 'Bungalow', location: 'Los Angeles, CA', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80' },
  //   { id: 2, title: 'Skyline Penthouse', type: 'Site', location: 'Manhattan, NY', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
  //   { id: 3, title: 'Modern Villa', type: 'Villa', location: 'Miami, FL', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80' },
  //   { id: 4, title: 'Coastal Retreat', type: 'Bungalow', location: 'Santa Barbara, CA', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  //   { id: 5, title: 'Urban Oasis', type: 'Site', location: 'Chicago, IL', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80' },
  //   { id: 6, title: 'Lakeside Mansion', type: 'Villa', location: 'Lake Tahoe, NV', img: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80' }
  // ];

  galleryItems = Constants.MOCK_GALLERY_ITEMS.slice(0, 3); // Show only first 6 items on home page

  testimonials = [
    { id: 1, name: 'John Doe', role: 'Home Owner', avatar: 'https://i.pravatar.cc/150?u=1', text: 'Found my dream bungalow within a week. The process was seamless!' },
    { id: 2, name: 'Sarah Smith', role: 'Investor', avatar: 'https://i.pravatar.cc/150?u=2', text: 'ModernNest has the best selection of luxury sites I have ever seen.' },
    { id: 3, name: 'Robert Fox', role: 'Architect', avatar: 'https://i.pravatar.cc/150?u=3', text: 'The attention to detail in these property listings is unparalleled.' },
    { id: 4, name: 'Emily Davis', role: 'Buyer', avatar: 'https://i.pravatar.cc/150?u=4', text: 'Highly recommend! The team helped me navigate the market perfectly.' },
    { id: 5, name: 'Michael Chen', role: 'Property Manager', avatar: 'https://i.pravatar.cc/150?u=5', text: 'A truly world-class experience from start to finish.' },
    { id: 6, name: 'Jessica Lee', role: 'First-time Buyer', avatar: 'https://i.pravatar.cc/150?u=6', text: 'User-friendly interface and amazing support team.' }
  ];
}
