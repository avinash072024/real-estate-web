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
