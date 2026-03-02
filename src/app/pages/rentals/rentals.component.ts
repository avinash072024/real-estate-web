import { Component } from '@angular/core';

@Component({
  selector: 'app-rentals',
  imports: [],
  templateUrl: './rentals.component.html',
  styleUrl: './rentals.component.scss'
})
export class RentalsComponent {
  rentals = [
    {
      id: 1,
      title: 'Urban Loft Apartment',
      price: 2500,
      period: 'month',
      beds: 2,
      baths: 2,
      type: 'Furnished',
      available: 'Immediate',
      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    },
    {
      id: 2,
      title: 'Garden View Studio',
      price: 1800,
      period: 'month',
      beds: 1,
      baths: 1,
      type: 'Unfurnished',
      available: 'April 1st',
      img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800'
    },
    {
      id: 3,
      title: 'Penthouse with Terrace',
      price: 4500,
      period: 'month',
      beds: 3,
      baths: 2,
      type: 'Luxury',
      available: 'Immediate',
      img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    }
  ];
}
