import { Component, inject, OnInit, signal } from '@angular/core';
import { Constants } from '../../models/constants';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-details',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.scss'
})
export class PropertyDetailsComponent implements OnInit {

  selectedProperty = signal<any>([]);

  featuredProperty = Constants.MOCK_GALLERY_ITEMS;

  // property = {
  //   title: 'Modern Sunset Bungalow',
  //   price: 1250000,
  //   address: '452 Ocean View Dr, Malibu, CA',
  //   description: 'Experience luxury living in this architectural masterpiece. Featuring floor-to-ceiling windows, a private infinity pool, and smart home integration throughout.',
  //   specs: { beds: 4, baths: 3, sqft: 3200, garage: 2 },
  //   images: [
  //     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
  //     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
  //     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
  //     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200'
  //   ]
  // };

  route = inject(ActivatedRoute);

  ngOnInit() {
    debugger;
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.selectedProperty.set(
        this.featuredProperty.find((room: any) => room.id === id) ?? null
      );
    });

    debugger;
    console.log('this.selectedProperty:', this.selectedProperty);
    debugger;
  }

  onSubmitVisit() {
    alert('Request Sent! Our agent will contact you shortly.');
  }

}
