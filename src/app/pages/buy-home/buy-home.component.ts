import { DecimalPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-buy-home',
  imports: [NgClass, DecimalPipe],
  templateUrl: './buy-home.component.html',
  styleUrl: './buy-home.component.scss'
})
export class BuyHomeComponent {
  // properties = [
  //   { id: 1, title: 'The Glass Pavilion', price: 2450000, beds: 4, baths: 3, sqft: 3500, tag: 'Luxury', isFav: false, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800' },
  //   { id: 2, title: 'Modern Heritage Bungalow', price: 980000, beds: 3, baths: 2, sqft: 2100, tag: 'Trending', isFav: true, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
  //   { id: 3, title: 'Coastal Horizon Villa', price: 1750000, beds: 5, baths: 4, sqft: 4200, tag: 'New', isFav: false, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800' }
  // ];

  properties = Constants.MOCK_GALLERY_ITEMS;

  toggleFavorite(id: number) {
    const prop = this.properties.find(p => p.id === id);
    if (prop) prop.isFav = !prop.isFav;
  }
}
