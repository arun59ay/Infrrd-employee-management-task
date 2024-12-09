import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating-display',
  templateUrl: './rating-display.component.html',
  styleUrls: ['./rating-display.component.scss'],
})
export class RatingDisplayComponent implements OnChanges {
  @Input() rating: number = 0; // Input rating value (e.g., 3.9)
  stars: { type: 'full' | 'half' | 'empty' }[] = []; // Array for star types

  ngOnChanges() {
    this.calculateStars(); // Update stars on input changes
  }

  private calculateStars() {
    this.stars = [];
    const fullStars = Math.floor(this.rating); // Number of full stars
    const decimalPart = this.rating - fullStars; // Extract the decimal part

    // Determine if there is a half star (0.5 <= decimal < 1)
    const hasHalfStar = decimalPart >= 0.5 && decimalPart < 1;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      this.stars.push({ type: 'full' });
    }

    // Add half star if applicable
    if (hasHalfStar) {
      this.stars.push({ type: 'half' });
    }

    // Fill remaining with empty stars
    const emptyStars = 5 - this.stars.length;
    for (let i = 0; i < emptyStars; i++) {
      this.stars.push({ type: 'empty' });
    }
  }
}
